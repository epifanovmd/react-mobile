import * as React from 'react';
import { memo, useCallback, useMemo, useRef } from 'react';
import {
  Animated,
  BackHandler,
  Easing,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  LayoutChangeEvent,
  NativeEventSubscription,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NativeViewGestureHandler,
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

import { ModalProps, TClose, TOpen, TPosition, TStyle } from './types';
import { useDimensions } from '../../../hooks';
import { getSpringConfig } from './utils/get-spring-config';
import { invariant } from './utils/invariant';
import { ModalPortal } from './ModalPortal';
import { isIphoneX } from 'react-native-iphone-x-helper';

const AnimatedKeyboardAvoidingView =
  Animated.createAnimatedComponent(KeyboardAvoidingView);

const SCROLL_THRESHOLD = -4;
const USE_NATIVE_DRIVER = true;
const ACTIVATED = 20;
const PAN_DURATION = 150;

export type Modal = {
  open(dest?: TOpen): void;
  close(dest?: TClose): void;
};

export const Modal = memo(
  React.forwardRef(
    (
      {
        // Renderers
        children,

        // Styles
        rootStyle,
        modalStyle,
        handleStyle,
        overlayStyle,
        childrenStyle,

        // Layout
        snapPoint,
        modalHeight,
        modalTopOffset = Platform.select({
          ios: 0,
          android: StatusBar.currentHeight || 0,
          default: 0,
        }),
        alwaysOpen,
        adjustToContentHeight = false,

        // Options
        handlePosition = 'outside',
        avoidKeyboardLikeIOS = Platform.select({
          ios: true,
          android: false,
          default: true,
        }),
        keyboardAvoidingBehavior = 'padding',
        keyboardAvoidingOffset,
        panGestureEnabled = true,
        childrenPanGestureEnabled = true,
        tapGestureEnabled = true,
        closeOnOverlayTap = true,
        closeSnapPointStraightEnabled = true,

        // Animations
        openAnimationConfig = {
          timing: { duration: 240, easing: Easing.ease },
          spring: { speed: 14, bounciness: 4 },
        },
        closeAnimationConfig = {
          timing: { duration: 240, easing: Easing.ease },
        },
        dragToss = 0.18,
        threshold = 120,
        velocity = 2800,
        panGestureAnimatedValue,
        useNativeDriver = true,

        // Elements visibilities
        withHandle = true,
        withOverlay = true,

        // Callbacks
        onOpen,
        onOpened,
        onClose,
        onClosed,
        onBackButtonPress,
        onPositionChange,
        onOverlayPress,
        onLayout,
      }: ModalProps,
      ref: React.Ref<Modal>,
    ) => {
      const { height: screenHeight } = useDimensions();
      const isHandleOutside = handlePosition === 'outside';
      const handleHeight = withHandle ? 20 : isHandleOutside ? 35 : 20;
      const fullHeight = screenHeight - modalTopOffset;
      const computedHeight =
        fullHeight - handleHeight - (isIphoneX() ? 34 : 0) - 16;
      const endHeight = modalHeight || computedHeight;
      const adjustValue = adjustToContentHeight ? undefined : endHeight;
      const snaps = useMemo(
        () =>
          snapPoint ? [0, endHeight - snapPoint, endHeight] : [0, endHeight],
        [endHeight, snapPoint],
      );

      const [modalHeightValue, setModalHeightValue] =
        React.useState(adjustValue);
      const [lastSnap, setLastSnap] = React.useState(
        snapPoint ? endHeight - snapPoint : 0,
      );
      const [isVisible, setIsVisible] = React.useState(false);
      const [showContent, setShowContent] = React.useState(true);

      const [beginScrollYValue, setBeginScrollYValue] = React.useState(0);
      const [modalPosition, setModalPosition] =
        React.useState<TPosition>('initial');
      const [cancelClose, setCancelClose] = React.useState(false);

      const cancelTranslateY = React.useRef(new Animated.Value(1)).current; // 1 by default to have the translateY animation running
      const componentTranslateY = React.useRef(new Animated.Value(0)).current;
      const overlay = React.useRef(new Animated.Value(0)).current;
      const beginScrollY = React.useRef(new Animated.Value(0)).current;
      const dragY = React.useRef(new Animated.Value(0)).current;
      const translateY = React.useRef(new Animated.Value(screenHeight)).current;
      const reverseBeginScrollY = React.useRef(
        Animated.multiply(new Animated.Value(-1), beginScrollY),
      ).current;

      const willCloseModalize = useRef<boolean>(false);

      const tapGestureModalizeRef = React.useRef<TapGestureHandler>(null);
      const panGestureChildrenRef = React.useRef<PanGestureHandler>(null);
      const nativeViewChildrenRef =
        React.useRef<NativeViewGestureHandler>(null);
      const tapGestureOverlayRef = React.useRef<TapGestureHandler>(null);
      const backButtonListenerRef =
        React.useRef<NativeEventSubscription | null>(null);

      // We diff and get the negative value only. It sometimes go above 0
      // (e.g. 1.5) and creates the flickering on Modalize for a ms
      const diffClamp = useMemo(
        () => Animated.diffClamp(reverseBeginScrollY, -screenHeight, 0),
        [reverseBeginScrollY, screenHeight],
      );
      const componentDragEnabled = useMemo(
        () => (componentTranslateY as any)._value === 1,
        [componentTranslateY],
      );
      // When we have a scrolling happening in the ScrollView, we don't want to translate
      // the modal down. We either multiply by 0 to cancel the animation, or 1 to proceed.
      const dragValue = useMemo(
        () =>
          Animated.add(
            Animated.multiply(
              dragY,
              componentDragEnabled ? 1 : cancelTranslateY,
            ),
            diffClamp,
          ),
        [cancelTranslateY, componentDragEnabled, diffClamp, dragY],
      );
      const value = useMemo(
        () =>
          Animated.add(
            Animated.multiply(
              translateY,
              componentDragEnabled ? 1 : cancelTranslateY,
            ),
            dragValue,
          ),
        [cancelTranslateY, componentDragEnabled, dragValue, translateY],
      );

      const handleAnimateClose = useCallback(
        (dest: TClose = 'default', callback?: () => void): void => {
          const { timing, spring } = closeAnimationConfig;
          const lastSnapValue = snapPoint ? snaps[1] : 80;
          const toInitialAlwaysOpen =
            dest === 'alwaysOpen' && Boolean(alwaysOpen);
          const toValue =
            toInitialAlwaysOpen && alwaysOpen
              ? (modalHeightValue || 0) - alwaysOpen
              : screenHeight;

          backButtonListenerRef.current?.remove();
          cancelTranslateY.setValue(1);
          setBeginScrollYValue(0);
          beginScrollY.setValue(0);

          Animated.parallel([
            Animated.timing(overlay, {
              toValue: 0,
              duration: timing.duration,
              easing: Easing.ease,
              useNativeDriver: USE_NATIVE_DRIVER,
            }),

            panGestureAnimatedValue
              ? Animated.timing(panGestureAnimatedValue, {
                  toValue: 0,
                  duration: PAN_DURATION,
                  easing: Easing.ease,
                  useNativeDriver,
                })
              : Animated.delay(0),

            spring
              ? Animated.spring(translateY, {
                  ...getSpringConfig(spring),
                  toValue,
                  useNativeDriver: USE_NATIVE_DRIVER,
                })
              : Animated.timing(translateY, {
                  duration: timing.duration,
                  easing: Easing.out(Easing.ease),
                  toValue,
                  useNativeDriver: USE_NATIVE_DRIVER,
                }),
          ]).start(() => {
            if (onClosed) {
              onClosed();
            }

            if (callback) {
              callback();
            }

            if (alwaysOpen && dest === 'alwaysOpen' && onPositionChange) {
              onPositionChange('initial');
            }

            if (alwaysOpen && dest === 'alwaysOpen') {
              setModalPosition('initial');
            }

            setShowContent(toInitialAlwaysOpen);
            translateY.setValue(toValue);
            dragY.setValue(0);
            willCloseModalize.current = false;
            setLastSnap(lastSnapValue);
            setIsVisible(toInitialAlwaysOpen);
          });
        },
        [
          alwaysOpen,
          beginScrollY,
          cancelTranslateY,
          closeAnimationConfig,
          dragY,
          modalHeightValue,
          onClosed,
          onPositionChange,
          overlay,
          panGestureAnimatedValue,
          screenHeight,
          snapPoint,
          snaps,
          translateY,
          useNativeDriver,
        ],
      );

      const handleContentLayout = useCallback(
        (event: LayoutChangeEvent): void => {
          if (onLayout) {
            onLayout(event);
          }

          if (alwaysOpen && adjustToContentHeight) {
            const { height } = event.nativeEvent.layout;

            setModalHeightValue(height);
          }
        },
        [adjustToContentHeight, alwaysOpen, onLayout],
      );

      const handleClose = useCallback(
        (dest?: TClose, callback?: () => void): void => {
          if (onClose) {
            onClose();
          }

          handleAnimateClose(dest, callback);
        },
        [handleAnimateClose, onClose],
      );

      const handleBackPress = useCallback((): boolean => {
        if (alwaysOpen) {
          handleClose('alwaysOpen');

          return true;
        }

        if (onBackButtonPress) {
          return onBackButtonPress();
        } else {
          handleClose();
        }

        return true;
      }, [alwaysOpen, handleClose, onBackButtonPress]);

      const handleAnimateOpen = useCallback(
        (
          alwaysOpenValue: number | undefined,
          dest: TOpen = 'default',
        ): void => {
          const { timing, spring } = openAnimationConfig;

          backButtonListenerRef.current = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackPress,
          );

          let toValue = 0;
          let toPanValue = 0;
          let newPosition: TPosition;

          if (dest === 'top') {
            toValue = 0;
          } else if (alwaysOpenValue) {
            toValue = (modalHeightValue || 0) - alwaysOpenValue;
          } else if (snapPoint) {
            toValue = (modalHeightValue || 0) - snapPoint;
          }

          if (panGestureAnimatedValue && (alwaysOpenValue || snapPoint)) {
            toPanValue = 0;
          } else if (
            panGestureAnimatedValue &&
            !alwaysOpenValue &&
            (dest === 'top' || dest === 'default')
          ) {
            toPanValue = 1;
          }

          setIsVisible(true);
          setShowContent(true);

          if (
            (alwaysOpenValue && dest !== 'top') ||
            (snapPoint && dest === 'default')
          ) {
            newPosition = 'initial';
          } else {
            newPosition = 'top';
          }

          Animated.parallel([
            Animated.timing(overlay, {
              toValue: alwaysOpenValue && dest === 'default' ? 0 : 1,
              duration: timing.duration,
              easing: Easing.ease,
              useNativeDriver: USE_NATIVE_DRIVER,
            }),

            panGestureAnimatedValue
              ? Animated.timing(panGestureAnimatedValue, {
                  toValue: toPanValue,
                  duration: PAN_DURATION,
                  easing: Easing.ease,
                  useNativeDriver,
                })
              : Animated.delay(0),

            spring
              ? Animated.spring(translateY, {
                  ...getSpringConfig(spring),
                  toValue,
                  useNativeDriver: USE_NATIVE_DRIVER,
                })
              : Animated.timing(translateY, {
                  toValue,
                  duration: timing.duration,
                  easing: timing.easing,
                  useNativeDriver: USE_NATIVE_DRIVER,
                }),
          ]).start(() => {
            if (onOpened) {
              onOpened();
            }

            setModalPosition(newPosition);

            if (onPositionChange) {
              onPositionChange(newPosition);
            }
          });
        },
        [
          handleBackPress,
          modalHeightValue,
          onOpened,
          onPositionChange,
          openAnimationConfig,
          overlay,
          panGestureAnimatedValue,
          snapPoint,
          translateY,
          useNativeDriver,
        ],
      );

      const handleChildren = useCallback(
        (
          { nativeEvent }: PanGestureHandlerStateChangeEvent,
          type?: 'component' | 'children',
        ): void => {
          const { timing } = closeAnimationConfig;
          const { velocityY, translationY } = nativeEvent;
          const negativeReverseScroll =
            modalPosition === 'top' &&
            beginScrollYValue >= (snapPoint ? 0 : SCROLL_THRESHOLD) &&
            translationY < 0;
          const thresholdProps =
            translationY > threshold && beginScrollYValue === 0;
          const closeThreshold = velocity
            ? (beginScrollYValue <= 20 && velocityY >= velocity) ||
              thresholdProps
            : thresholdProps;

          // We make sure to reset the value if we are dragging from the children
          if (type !== 'component' && (cancelTranslateY as any)._value === 0) {
            componentTranslateY.setValue(0);
          }

          /*
           * When the pan gesture began we check the position of the ScrollView "cursor".
           * We cancel the translation animation if the ScrollView is not scrolled to the top
           */
          if (nativeEvent.oldState === State.BEGAN) {
            setCancelClose(false);

            if (
              !closeSnapPointStraightEnabled && snapPoint
                ? beginScrollYValue > 0
                : beginScrollYValue > 0 || negativeReverseScroll
            ) {
              setCancelClose(true);
              translateY.setValue(0);
              dragY.setValue(0);
              cancelTranslateY.setValue(0);
            } else {
              cancelTranslateY.setValue(1);
            }
          }

          if (nativeEvent.oldState === State.ACTIVE) {
            const toValue = translationY - beginScrollYValue;
            let destSnapPoint = 0;

            if (snapPoint || alwaysOpen) {
              const endOffsetY = lastSnap + toValue + dragToss * velocityY;

              /**
               * snapPoint and alwaysOpen use both an array of points to define the first open state and the final state.
               */
              snaps.forEach((snap: number) => {
                const distFromSnap = Math.abs(snap - endOffsetY);
                const diffPoint = Math.abs(destSnapPoint - endOffsetY);

                // For snapPoint
                if (distFromSnap < diffPoint && !alwaysOpen) {
                  if (closeSnapPointStraightEnabled) {
                    if (modalPosition === 'initial' && negativeReverseScroll) {
                      destSnapPoint = snap;
                      willCloseModalize.current = false;
                    }

                    if (snap === endHeight) {
                      destSnapPoint = snap;
                      willCloseModalize.current = true;
                      handleClose();
                    }
                  } else {
                    destSnapPoint = snap;
                    willCloseModalize.current = false;

                    if (snap === endHeight) {
                      willCloseModalize.current = true;
                      handleClose();
                    }
                  }
                }

                // For alwaysOpen props
                if (
                  distFromSnap < diffPoint &&
                  alwaysOpen &&
                  beginScrollYValue <= 0
                ) {
                  destSnapPoint = (modalHeightValue || 0) - alwaysOpen;
                  willCloseModalize.current = false;
                }
              });
            } else if (closeThreshold && !alwaysOpen && !cancelClose) {
              willCloseModalize.current = true;
              handleClose();
            }

            if (willCloseModalize.current) {
              return;
            }

            setLastSnap(destSnapPoint);
            translateY.extractOffset();
            translateY.setValue(toValue);
            translateY.flattenOffset();
            dragY.setValue(0);

            if (alwaysOpen) {
              Animated.timing(overlay, {
                toValue: Number(destSnapPoint <= 0),
                duration: timing.duration,
                easing: Easing.ease,
                useNativeDriver: USE_NATIVE_DRIVER,
              }).start();
            }

            Animated.spring(translateY, {
              tension: 50,
              friction: 12,
              velocity: velocityY,
              toValue: destSnapPoint,
              useNativeDriver: USE_NATIVE_DRIVER,
            }).start();

            if (beginScrollYValue <= 0) {
              const modalPositionValue = destSnapPoint <= 0 ? 'top' : 'initial';

              if (panGestureAnimatedValue) {
                Animated.timing(panGestureAnimatedValue, {
                  toValue: Number(modalPositionValue === 'top'),
                  duration: PAN_DURATION,
                  easing: Easing.ease,
                  useNativeDriver,
                }).start();
              }

              if (onPositionChange && modalPosition !== modalPositionValue) {
                onPositionChange(modalPositionValue);
              }

              if (modalPosition !== modalPositionValue) {
                setModalPosition(modalPositionValue);
              }
            }
          }
        },
        [
          alwaysOpen,
          beginScrollYValue,
          cancelClose,
          cancelTranslateY,
          closeAnimationConfig,
          closeSnapPointStraightEnabled,
          componentTranslateY,
          dragToss,
          dragY,
          endHeight,
          handleClose,
          lastSnap,
          modalHeightValue,
          modalPosition,
          onPositionChange,
          overlay,
          panGestureAnimatedValue,
          snapPoint,
          snaps,
          threshold,
          translateY,
          useNativeDriver,
          velocity,
        ],
      );

      const handleComponent = useCallback(
        ({ nativeEvent }: PanGestureHandlerStateChangeEvent): void => {
          // If we drag from the HeaderComponent/FooterComponent/FloatingComponent we allow the translation animation
          if (nativeEvent.oldState === State.BEGAN) {
            componentTranslateY.setValue(1);
            beginScrollY.setValue(0);
          }

          handleChildren({ nativeEvent }, 'component');
        },
        [beginScrollY, componentTranslateY, handleChildren],
      );

      const handleOverlay = useCallback(
        ({ nativeEvent }: TapGestureHandlerStateChangeEvent): void => {
          if (
            nativeEvent.oldState === State.ACTIVE &&
            !willCloseModalize.current
          ) {
            if (onOverlayPress) {
              onOverlayPress();
            }

            const dest = alwaysOpen ? 'alwaysOpen' : 'default';

            handleClose(dest);
          }
        },
        [alwaysOpen, handleClose, onOverlayPress],
      );

      const handleGestureEvent = useMemo(
        () =>
          Animated.event([{ nativeEvent: { translationY: dragY } }], {
            useNativeDriver: USE_NATIVE_DRIVER,
            listener: ({
              nativeEvent: { translationY },
            }: PanGestureHandlerStateChangeEvent) => {
              if (panGestureAnimatedValue) {
                const offset = alwaysOpen ?? snapPoint ?? 0;
                const diff = Math.abs(translationY / (endHeight - offset));
                const y = translationY <= 0 ? diff : 1 - diff;
                let v: number;

                if (modalPosition === 'initial' && translationY > 0) {
                  v = 0;
                } else if (modalPosition === 'top' && translationY <= 0) {
                  v = 1;
                } else {
                  v = y;
                }

                panGestureAnimatedValue.setValue(v);
              }
            },
          }),
        [
          alwaysOpen,
          dragY,
          endHeight,
          modalPosition,
          panGestureAnimatedValue,
          snapPoint,
        ],
      );

      const renderHandle = useCallback(() => {
        const handleStyles: (TStyle | undefined)[] = [s.handle];
        const shapeStyles: (TStyle | undefined)[] = [s.snap];

        if (!withHandle) {
          return null;
        }

        if (!isHandleOutside) {
          handleStyles.push({
            top: 0,
          });
          shapeStyles.push({
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          });
        }

        shapeStyles.push(handleStyle);

        return (
          <PanGestureHandler
            enabled={panGestureEnabled}
            simultaneousHandlers={tapGestureModalizeRef}
            shouldCancelWhenOutside={false}
            onGestureEvent={handleGestureEvent}
            onHandlerStateChange={handleComponent}
          >
            <Animated.View style={handleStyles}>
              <View style={shapeStyles} />
            </Animated.View>
          </PanGestureHandler>
        );
      }, [
        handleComponent,
        handleGestureEvent,
        handleStyle,
        isHandleOutside,
        panGestureEnabled,
        withHandle,
      ]);

      const renderChildren = useCallback(
        () => (
          <PanGestureHandler
            ref={panGestureChildrenRef}
            enabled={panGestureEnabled && childrenPanGestureEnabled}
            simultaneousHandlers={[
              nativeViewChildrenRef,
              tapGestureModalizeRef,
            ]}
            shouldCancelWhenOutside={false}
            onGestureEvent={handleGestureEvent}
            minDist={undefined}
            activeOffsetY={ACTIVATED}
            activeOffsetX={ACTIVATED}
            onHandlerStateChange={handleChildren}
          >
            <Animated.View onLayout={handleContentLayout} style={childrenStyle}>
              <NativeViewGestureHandler
                ref={nativeViewChildrenRef}
                waitFor={tapGestureModalizeRef}
                simultaneousHandlers={panGestureChildrenRef}
              >
                <View>{children}</View>
              </NativeViewGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        ),
        [
          children,
          childrenStyle,
          handleChildren,
          handleContentLayout,
          handleGestureEvent,
          panGestureEnabled,
          childrenPanGestureEnabled,
        ],
      );

      const renderOverlay = useCallback(() => {
        const pointerEvents =
          alwaysOpen && (modalPosition === 'initial' || !modalPosition)
            ? 'box-none'
            : 'auto';

        return (
          <PanGestureHandler
            enabled={panGestureEnabled}
            simultaneousHandlers={tapGestureModalizeRef}
            shouldCancelWhenOutside={false}
            onGestureEvent={handleGestureEvent}
            onHandlerStateChange={handleChildren}
          >
            <Animated.View
              style={s.overlayContainer}
              pointerEvents={pointerEvents}
            >
              {showContent && (
                <TapGestureHandler
                  ref={tapGestureOverlayRef}
                  enabled={
                    closeOnOverlayTap !== undefined
                      ? closeOnOverlayTap
                      : panGestureEnabled
                  }
                  onHandlerStateChange={handleOverlay}
                >
                  <Animated.View
                    style={[
                      s.overlay,
                      overlayStyle,
                      {
                        opacity: overlay.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 1],
                        }),
                      },
                    ]}
                    pointerEvents={pointerEvents}
                  />
                </TapGestureHandler>
              )}
            </Animated.View>
          </PanGestureHandler>
        );
      }, [
        alwaysOpen,
        closeOnOverlayTap,
        handleChildren,
        handleGestureEvent,
        handleOverlay,
        modalPosition,
        overlay,
        overlayStyle,
        panGestureEnabled,
        showContent,
      ]);

      React.useImperativeHandle(ref, () => ({
        open(dest?: TOpen): void {
          if (onOpen) {
            onOpen();
          }

          handleAnimateOpen(alwaysOpen, dest);
        },

        close(dest?: TClose, callback?: () => void): void {
          handleClose(dest, callback);
        },
      }));

      React.useEffect(() => {
        if (alwaysOpen && (modalHeightValue || adjustToContentHeight)) {
          handleAnimateOpen(alwaysOpen);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [alwaysOpen, modalHeightValue]);

      React.useEffect(() => {
        invariant(
          modalHeight && adjustToContentHeight,
          // eslint-disable-next-line quotes
          "You can't use both 'modalHeight' and 'adjustToContentHeight' props at the same time. Only choose one of the two.",
        );
      }, [modalHeight, adjustToContentHeight, children]);

      React.useEffect(() => {
        setModalHeightValue(adjustValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [adjustToContentHeight, modalHeight, screenHeight]);

      React.useEffect(() => {
        const beginScrollYListener = beginScrollY.addListener(event =>
          setBeginScrollYValue(event.value),
        );

        return (): void => {
          backButtonListenerRef.current?.remove();
          beginScrollY.removeListener(beginScrollYListener);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const keyboardAvoidingViewProps: Animated.AnimatedProps<KeyboardAvoidingViewProps> =
        useMemo(
          () => ({
            keyboardVerticalOffset: keyboardAvoidingOffset,
            behavior: keyboardAvoidingBehavior,
            enabled: avoidKeyboardLikeIOS,
            style: [
              s.keyboardAvoiding,
              modalStyle,
              {
                flex: adjustToContentHeight ? 0 : 1,
                height: modalHeightValue,
                maxHeight: endHeight,
                transform: [
                  {
                    translateY: value.interpolate({
                      inputRange: [-40, 0, endHeight],
                      outputRange: [0, 0, endHeight],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ],
          }),
          [
            adjustToContentHeight,
            avoidKeyboardLikeIOS,
            endHeight,
            keyboardAvoidingBehavior,
            keyboardAvoidingOffset,
            modalHeightValue,
            modalStyle,
            value,
          ],
        );

      const _rootStyle = useMemo(() => [s.root, rootStyle], [rootStyle]);

      if (!isVisible) {
        return null;
      }

      return (
        <ModalPortal>
          <View
            style={_rootStyle}
            pointerEvents={alwaysOpen || !withOverlay ? 'box-none' : 'auto'}
          >
            <TapGestureHandler
              ref={tapGestureModalizeRef}
              maxDurationMs={tapGestureEnabled ? 100000 : 50}
              maxDeltaY={lastSnap}
              enabled={panGestureEnabled}
            >
              <View style={s.modalContainer} pointerEvents="box-none">
                {showContent && (
                  <AnimatedKeyboardAvoidingView {...keyboardAvoidingViewProps}>
                    {renderHandle()}
                    {renderChildren()}
                  </AnimatedKeyboardAvoidingView>
                )}

                {withOverlay && renderOverlay()}
              </View>
            </TapGestureHandler>
          </View>
        </ModalPortal>
      );
    },
  ),
);

const s = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9998,
  },
  modalContainer: {
    height: '100%',
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  handle: {
    position: 'absolute',
    top: -20,
    right: 0,
    left: 0,
    zIndex: 5,

    paddingBottom: 20,

    height: 20,
  },
  snap: {
    alignSelf: 'center',

    top: 8,

    width: 45,
    height: 5,

    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  keyboardAvoiding: {
    zIndex: 5,

    marginTop: 'auto',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 12,

    elevation: 4,
  },
});
