import { Portal } from '@gorhom/portal';
import { nanoid } from 'nanoid/non-secure';
import React, { FC, memo, PropsWithChildren, useMemo } from 'react';
import { StyleProp, StyleSheet, ViewProps, ViewStyle } from 'react-native';

import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { HapticFeedbackTypes, trigger } from '../../utils';
import Animated, {
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_SCALE_DOWN_DURATION,
  HOLD_ITEM_SCALE_DOWN_VALUE,
  HOLD_ITEM_TRANSFORM_DURATION,
  SPRING_CONFIGURATION,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from './utils/constants';
import { useDeviceOrientation, useHoldItemContext } from './hooks';
import { MenuItemProps } from './menu/types';
import { styleGuide } from './utils/styleGuide';
import {
  calculateMenuHeight,
  getTransformOrigin,
  TransformOriginAnchorPosition,
} from './utils/calculations';

export type HoldItemMenuProps = {
  items: MenuItemProps[];

  disableMove?: boolean;
  style?: StyleProp<ViewStyle>;
  bottom?: boolean;
  activateOn?: 'tap' | 'double-tap' | 'hold';
  closeOnTap?: boolean;
  longPressMinDurationMs?: number;
};

type GestureHandlerProps = {
  children: React.ReactElement | React.ReactElement[];
};

type Context = { didMeasureLayout: boolean };

export const HoldItemMenu: FC<PropsWithChildren<HoldItemMenuProps>> = memo(
  ({
    items,
    bottom,
    style,
    disableMove,
    activateOn,
    closeOnTap,
    longPressMinDurationMs = 150,
    children,
  }) => {
    const { state, menuProps, safeAreaInsets } = useHoldItemContext();
    const deviceOrientation = useDeviceOrientation();

    const isActive = useSharedValue(false);
    const isAnimationStarted = useSharedValue(false);

    const itemRectY = useSharedValue<number>(0);
    const itemRectX = useSharedValue<number>(0);
    const itemRectWidth = useSharedValue<number>(0);
    const itemRectHeight = useSharedValue<number>(0);
    const itemScale = useSharedValue<number>(1);
    const transformValue = useSharedValue<number>(0);

    const transformOrigin =
      useSharedValue<TransformOriginAnchorPosition>('top-right');

    const key = useMemo(() => `hold-item-${nanoid()}`, []);
    const menuHeight = useMemo(() => {
      const itemsWithSeparator = items.filter(item => item.withSeparator);
      return calculateMenuHeight(items.length, itemsWithSeparator.length);
    }, [items]);

    const isHold = !activateOn || activateOn === 'hold';

    const containerRef = useAnimatedRef<Animated.View>();

    const hapticResponse = () => {
      trigger(HapticFeedbackTypes.impactHeavy);
    };

    const activateAnimation = (ctx: any) => {
      'worklet';
      if (!ctx.didMeasureLayout) {
        const measured = measure(containerRef);

        if (measured) {
          itemRectY.value = measured.pageY;
          itemRectX.value = measured.pageX;
          itemRectHeight.value = measured.height;
          itemRectWidth.value = measured.width;

          transformOrigin.value = getTransformOrigin(
            measured.pageX,
            itemRectWidth.value,
            deviceOrientation === 'portrait' ? WINDOW_WIDTH : WINDOW_HEIGHT,
            bottom,
          );
        }
      }
    };

    const calculateTransformValue = () => {
      'worklet';

      const height =
        deviceOrientation === 'portrait' ? WINDOW_HEIGHT : WINDOW_WIDTH;

      const isAnchorPointTop = transformOrigin.value.includes('top');

      let tY = 0;
      if (!disableMove) {
        if (isAnchorPointTop) {
          const topTransform =
            itemRectY.value +
            itemRectHeight.value +
            menuHeight +
            styleGuide.spacing +
            (safeAreaInsets?.bottom || 0);

          tY = topTransform > height ? height - topTransform : 0;
        } else {
          const bottomTransform =
            itemRectY.value - menuHeight - (safeAreaInsets?.top || 0);
          tY =
            bottomTransform < 0 ? -bottomTransform + styleGuide.spacing * 2 : 0;
        }
      }
      return tY;
    };

    const setMenuProps = () => {
      'worklet';

      menuProps.value = {
        itemHeight: itemRectHeight.value,
        itemWidth: itemRectWidth.value,
        itemY: itemRectY.value,
        itemX: itemRectX.value,
        anchorPosition: transformOrigin.value,
        menuHeight: menuHeight,
        items,
        transformValue: transformValue.value,
      };
    };

    const scaleBack = () => {
      'worklet';
      itemScale.value = withTiming(1, {
        duration: HOLD_ITEM_TRANSFORM_DURATION / 2,
      });
    };

    const onCompletion = (isFinised?: boolean) => {
      'worklet';
      const isListValid = items && items.length > 0;
      if (isFinised && isListValid) {
        state.value = CONTEXT_MENU_STATE.ACTIVE;
        isActive.value = true;
        scaleBack();
        runOnJS(hapticResponse)();
      }

      isAnimationStarted.value = false;
    };

    const scaleHold = () => {
      'worklet';
      itemScale.value = withTiming(
        HOLD_ITEM_SCALE_DOWN_VALUE,
        { duration: HOLD_ITEM_SCALE_DOWN_DURATION },
        onCompletion,
      );
    };

    const scaleTap = () => {
      'worklet';
      isAnimationStarted.value = true;

      itemScale.value = withSequence(
        withTiming(HOLD_ITEM_SCALE_DOWN_VALUE, {
          duration: HOLD_ITEM_SCALE_DOWN_DURATION,
        }),
        withTiming(
          1,
          {
            duration: HOLD_ITEM_TRANSFORM_DURATION / 2,
          },
          onCompletion,
        ),
      );
    };

    /**
     * When use tap activation ("tap") and trying to tap multiple times,
     * scale animation is called again despite it is started. This causes a bug.
     * To prevent this, it is better to check is animation already started.
     */
    const canCallActivateFunctions = () => {
      'worklet';
      const willActivateWithTap =
        activateOn === 'double-tap' || activateOn === 'tap';

      return (
        (willActivateWithTap && !isAnimationStarted.value) ||
        !willActivateWithTap
      );
    };

    const gestureEvent = useAnimatedGestureHandler<
      LongPressGestureHandlerGestureEvent | TapGestureHandlerGestureEvent,
      Context
    >({
      onActive: (_, context) => {
        if (canCallActivateFunctions()) {
          if (!context.didMeasureLayout) {
            activateAnimation(context);
            transformValue.value = calculateTransformValue();
            setMenuProps();
            context.didMeasureLayout = true;
          }

          if (!isActive.value) {
            if (isHold) {
              scaleHold();
            } else {
              scaleTap();
            }
          }
        }
      },
      onFinish: (_, context) => {
        context.didMeasureLayout = false;
        if (isHold) {
          scaleBack();
        }
      },
    });

    const overlayGestureEvent = useAnimatedGestureHandler<
      TapGestureHandlerGestureEvent,
      Context
    >({
      onActive: _ => {
        if (closeOnTap) {
          state.value = CONTEXT_MENU_STATE.END;
        }
      },
    });

    const animatedContainerStyle = useAnimatedStyle(() => {
      const animateOpacity = () =>
        withDelay(HOLD_ITEM_TRANSFORM_DURATION, withTiming(1, { duration: 0 }));

      return {
        opacity: isActive.value ? 0 : animateOpacity(),
        transform: [
          {
            scale: isActive.value
              ? withTiming(1, { duration: HOLD_ITEM_TRANSFORM_DURATION })
              : itemScale.value,
          },
        ],
      };
    });
    const containerStyle = React.useMemo(
      () => [style, animatedContainerStyle],
      [style, animatedContainerStyle],
    );

    const animatedPortalStyle = useAnimatedStyle(() => {
      const animateOpacity = () =>
        withDelay(HOLD_ITEM_TRANSFORM_DURATION, withTiming(0, { duration: 0 }));

      let tY = calculateTransformValue();
      const transformAnimation = () =>
        disableMove
          ? 0
          : isActive.value
          ? withSpring(tY, SPRING_CONFIGURATION)
          : withTiming(-0.1, { duration: HOLD_ITEM_TRANSFORM_DURATION });

      return {
        zIndex: 10,
        position: 'absolute',
        top: itemRectY.value,
        left: itemRectX.value,
        width: itemRectWidth.value,
        height: itemRectHeight.value,
        opacity: isActive.value ? 1 : animateOpacity(),
        transform: [
          {
            translateY: transformAnimation(),
          },
          {
            scale: isActive.value
              ? withTiming(1, { duration: HOLD_ITEM_TRANSFORM_DURATION })
              : itemScale.value,
          },
        ],
      };
    });
    const portalContainerStyle = useMemo(
      () => [styles.holdItem, animatedPortalStyle],
      [animatedPortalStyle],
    );

    const animatedPortalProps = useAnimatedProps<ViewProps>(() => ({
      pointerEvents: isActive.value ? 'auto' : 'none',
    }));

    useAnimatedReaction(
      () => state.value,
      _state => {
        if (_state === CONTEXT_MENU_STATE.END) {
          isActive.value = false;
        }
      },
    );

    const GestureHandler = useMemo(() => {
      switch (activateOn) {
        case 'double-tap':
          return ({ children: handlerChildren }: GestureHandlerProps) => (
            <TapGestureHandler
              numberOfTaps={2}
              onHandlerStateChange={gestureEvent}
            >
              {handlerChildren}
            </TapGestureHandler>
          );
        case 'tap':
          return ({ children: handlerChildren }: GestureHandlerProps) => (
            <TapGestureHandler
              numberOfTaps={1}
              onHandlerStateChange={gestureEvent}
            >
              {handlerChildren}
            </TapGestureHandler>
          );
        default:
          return ({ children: handlerChildren }: GestureHandlerProps) => (
            <LongPressGestureHandler
              minDurationMs={longPressMinDurationMs}
              onHandlerStateChange={gestureEvent}
            >
              {handlerChildren}
            </LongPressGestureHandler>
          );
      }
    }, [activateOn, gestureEvent, longPressMinDurationMs]);

    const PortalOverlay = useMemo(() => {
      return () => (
        <TapGestureHandler
          numberOfTaps={1}
          onHandlerStateChange={overlayGestureEvent}
        >
          <Animated.View style={styles.portalOverlay} />
        </TapGestureHandler>
      );
    }, [overlayGestureEvent]);

    return (
      <>
        <GestureHandler>
          <Animated.View ref={containerRef} style={containerStyle}>
            {children}
          </Animated.View>
        </GestureHandler>

        <Portal key={key} name={key}>
          <Animated.View
            key={key}
            style={portalContainerStyle}
            animatedProps={animatedPortalProps}
          >
            <PortalOverlay />
            {children}
          </Animated.View>
        </Portal>
      </>
    );
  },
);

const styles = StyleSheet.create({
  holdItem: { zIndex: 10, position: 'absolute' },
  portalOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 15,
  },
});
