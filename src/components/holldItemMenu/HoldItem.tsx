import { Portal } from '@gorhom/portal';
import { isEqual } from 'lodash';
import { nanoid } from 'nanoid/non-secure';
import React, {
  memo,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { HapticFeedbackTypes, trigger } from 'react-native-haptic-feedback';
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
import { HoldMenuItemProp } from './holdMenu/types';
import { useDeviceOrientation, useHoldItemContext } from './hooks';
import {
  calculateMenuHeight,
  getTransformOrigin,
  TransformOriginAnchorPosition,
} from './utils/calculations';
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_SCALE_DOWN_DURATION,
  HOLD_ITEM_SCALE_DOWN_VALUE,
  HOLD_ITEM_TRANSFORM_DURATION,
  IS_IOS,
  SPRING_CONFIGURATION,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from './utils/constants';

export interface HoldItemProps<T> extends TouchableOpacityProps {
  data?: T;
  items: HoldMenuItemProp<T>[];

  disableMove?: boolean;
  style?: StyleProp<ViewStyle>;
  position?: 'top' | 'bottom';
  activateOn?: 'tap' | 'double-tap' | 'hold';
  closeOnTap?: boolean;
  longPressMinDurationMs?: number;
}

type GestureHandlerProps = {
  children: React.ReactElement | React.ReactElement[];
};

type Context = { didMeasureLayout: boolean };

interface HoldItem {
  <T extends any>(
    props: PropsWithChildren<HoldItemProps<T>>,
  ): React.ReactElement | null;
}

export const HoldItem: HoldItem = memo(
  ({
    data,
    items,
    position = 'top',
    style,
    disableMove,
    activateOn,
    closeOnTap,
    longPressMinDurationMs = 150,
    children,
    ...rest
  }) => {
    const { state, menuProps, safeAreaInsets } = useHoldItemContext();
    const deviceOrientation = useDeviceOrientation();
    const [showPortal, setShowPortal] = useState(false);

    const isActive = useSharedValue(false);
    const isAnimationStarted = useSharedValue(false);

    const itemRectY = useSharedValue<number>(0);
    const itemRectX = useSharedValue<number>(0);
    const itemRectWidth = useSharedValue<number>(0);
    const itemRectHeight = useSharedValue<number>(0);
    const itemRectMaxHeight = useSharedValue<number>(WINDOW_HEIGHT);
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

    const hapticResponse = useCallback(() => {
      trigger(HapticFeedbackTypes.impactHeavy);
    }, []);

    const prepareAnimationValues = useCallback(
      (ctx: any) => {
        'worklet';
        if (!ctx.didMeasureLayout) {
          const measured = measure(containerRef);

          if (measured) {
            itemRectY.value = measured.pageY;
            itemRectX.value = measured.pageX;
            itemRectMaxHeight.value =
              WINDOW_HEIGHT -
              (IS_IOS ? menuHeight : menuHeight * 2) -
              safeAreaInsets.top -
              safeAreaInsets.bottom;
            itemRectHeight.value =
              measured.height > itemRectMaxHeight.value
                ? itemRectMaxHeight.value
                : measured.height;
            itemRectWidth.value = measured.width;

            transformOrigin.value = getTransformOrigin(
              measured.pageX,
              itemRectWidth.value,
              deviceOrientation === 'portrait' ? WINDOW_WIDTH : WINDOW_HEIGHT,
              position === 'bottom',
            );
          }
        }
      },
      [
        containerRef,
        itemRectY,
        itemRectX,
        itemRectMaxHeight,
        menuHeight,
        safeAreaInsets.top,
        safeAreaInsets.bottom,
        itemRectHeight,
        itemRectWidth,
        transformOrigin,
        deviceOrientation,
        position,
      ],
    );

    const calculateTransformValue = useCallback(() => {
      'worklet';

      const height =
        deviceOrientation === 'portrait' ? WINDOW_HEIGHT : WINDOW_WIDTH;

      const isTopMenu = transformOrigin.value.includes('bottom');

      let tY = 0;

      if (!disableMove) {
        const topPosition = isTopMenu
          ? itemRectY.value - menuHeight
          : itemRectY.value;
        const maxTopPosition = safeAreaInsets.top;

        const bottomPosition = isTopMenu
          ? itemRectY.value + itemRectHeight.value
          : itemRectY.value +
            itemRectHeight.value +
            (IS_IOS ? menuHeight : menuHeight * 2);
        const maxBottomPosition = height - safeAreaInsets.bottom;

        if (
          topPosition < maxTopPosition &&
          bottomPosition > maxBottomPosition
        ) {
          if (isTopMenu) {
            tY = maxTopPosition - topPosition;
          } else {
            tY = maxBottomPosition - bottomPosition;
          }

          return tY;
        } else {
          if (topPosition < maxTopPosition) {
            tY = maxTopPosition - topPosition;

            if (!isTopMenu && tY + bottomPosition > maxBottomPosition) {
              tY = maxBottomPosition - bottomPosition;
            }

            return tY;
          }

          if (bottomPosition > maxBottomPosition) {
            tY = maxBottomPosition - bottomPosition;

            if (isTopMenu && topPosition + tY < maxTopPosition) {
              tY = maxTopPosition - topPosition;
            }

            return tY;
          }
        }
      }

      return 0;
    }, [
      deviceOrientation,
      disableMove,
      itemRectHeight.value,
      itemRectY.value,
      menuHeight,
      safeAreaInsets.bottom,
      safeAreaInsets.top,
      transformOrigin.value,
    ]);

    const setMenuProps = useCallback(() => {
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
        data,
      };
    }, [
      data,
      itemRectHeight.value,
      itemRectWidth.value,
      itemRectX.value,
      itemRectY.value,
      items,
      menuHeight,
      menuProps,
      transformOrigin.value,
      transformValue.value,
    ]);

    const scaleBack = useCallback(() => {
      'worklet';
      itemScale.value = withTiming(1, {
        duration: HOLD_ITEM_TRANSFORM_DURATION / 2,
      });
    }, [itemScale]);

    const onCompletion = useCallback(
      (isFinised?: boolean) => {
        'worklet';
        const isListValid = items && items.length > 0;
        if (isFinised && isListValid) {
          state.value = CONTEXT_MENU_STATE.ACTIVE;
          isActive.value = true;
          scaleBack();
          runOnJS(hapticResponse)();
        }

        isAnimationStarted.value = false;
      },
      [hapticResponse, isActive, isAnimationStarted, items, scaleBack, state],
    );

    const scaleHold = useCallback(() => {
      'worklet';
      itemScale.value = withTiming(
        HOLD_ITEM_SCALE_DOWN_VALUE,
        { duration: HOLD_ITEM_SCALE_DOWN_DURATION },
        onCompletion,
      );
    }, [itemScale, onCompletion]);

    const scaleTap = useCallback(() => {
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
    }, [isAnimationStarted, itemScale, onCompletion]);

    /**
     * When use tap activation ("tap") and trying to tap multiple times,
     * scale animation is called again despite it is started. This causes a bug.
     * To prevent this, it is better to check is animation already started.
     */
    const canCallActivateFunctions = useCallback(() => {
      'worklet';
      const willActivateWithTap =
        activateOn === 'double-tap' || activateOn === 'tap';

      return (
        (willActivateWithTap && !isAnimationStarted.value) ||
        !willActivateWithTap
      );
    }, [activateOn, isAnimationStarted.value]);

    const gestureEvent = useAnimatedGestureHandler<
      LongPressGestureHandlerGestureEvent | TapGestureHandlerGestureEvent,
      Context
    >({
      onStart: () => {
        runOnJS(setShowPortal)(true);
      },
      onActive: (_, context) => {
        if (canCallActivateFunctions()) {
          if (!context.didMeasureLayout) {
            prepareAnimationValues(context);
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
        withDelay(
          HOLD_ITEM_TRANSFORM_DURATION - 50,
          withTiming(1, { duration: 0 }),
        );

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
      () => [{ flexShrink: 1 }, animatedContainerStyle],
      [animatedContainerStyle],
    );

    const animatedPortalStyle = useAnimatedStyle(() => {
      const animateOpacity = () =>
        withDelay(HOLD_ITEM_TRANSFORM_DURATION, withTiming(0, { duration: 0 }));

      const transformAnimation = () =>
        disableMove
          ? 0
          : isActive.value
          ? withSpring(transformValue.value, SPRING_CONFIGURATION)
          : withTiming(0, { duration: HOLD_ITEM_TRANSFORM_DURATION });

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
        ],
      };
    });

    const portalContainerStyle = useMemo(
      () => [
        styles.holdItem,
        animatedPortalStyle,
        { maxHeight: itemRectMaxHeight.value },
      ],
      [animatedPortalStyle, itemRectMaxHeight.value],
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
        <TouchableOpacity
          style={[styles.touchable, style]}
          activeOpacity={0.8}
          {...rest}
        >
          <GestureHandler>
            <Animated.View ref={containerRef} style={containerStyle}>
              {children}
            </Animated.View>
          </GestureHandler>
        </TouchableOpacity>

        {showPortal && (
          <Portal key={key} name={key}>
            <Animated.ScrollView
              key={key}
              style={portalContainerStyle}
              animatedProps={animatedPortalProps}
            >
              <PortalOverlay />
              {children}
            </Animated.ScrollView>
          </Portal>
        )}
      </>
    );
  },
  isEqual,
);

const styles = StyleSheet.create({
  touchable: { flexShrink: 1 },
  holdItem: {
    zIndex: 10,
    position: 'absolute',
  },
  portalOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 15,
  },
});
