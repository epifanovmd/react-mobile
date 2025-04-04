import { memo, useMemo } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import {
  useBottomSheet,
  useBottomSheetGestureHandlers,
  useBottomSheetInternal,
} from "./hooks";
import { BottomSheetBackdropProps } from "./types";

export interface IModalBackdrop extends BottomSheetBackdropProps {
  enableTapToClose?: boolean;
  enablePanToClose?: boolean;
}

export const ModalBackdrop = memo(
  ({
    animatedIndex,
    style,
    enableTapToClose = true,
    enablePanToClose = true,
  }: IModalBackdrop) => {
    const { handlePanGestureHandler } = useBottomSheetGestureHandlers();
    const { close } = useBottomSheet();

    const {
      activeOffsetX,
      activeOffsetY,
      failOffsetX,
      failOffsetY,
      waitFor,
      simultaneousHandlers,
    } = useBottomSheetInternal();

    // Пан-жест (свайп)
    const panGesture = useMemo(() => {
      let gesture = Gesture.Pan()
        .enabled(enablePanToClose)
        .shouldCancelWhenOutside(false)
        .onStart(handlePanGestureHandler.handleOnStart)
        .onChange(handlePanGestureHandler.handleOnChange)
        .onEnd(handlePanGestureHandler.handleOnEnd)
        .onFinalize(handlePanGestureHandler.handleOnFinalize);

      if (waitFor) {
        gesture = gesture.requireExternalGestureToFail(waitFor);
      }

      if (simultaneousHandlers) {
        gesture = gesture.simultaneousWithExternalGesture(
          simultaneousHandlers as never,
        );
      }

      if (activeOffsetX) {
        gesture = gesture.activeOffsetX(activeOffsetX);
      }

      if (activeOffsetY) {
        gesture = gesture.activeOffsetY(activeOffsetY);
      }

      if (failOffsetX) {
        gesture = gesture.failOffsetX(failOffsetX);
      }

      if (failOffsetY) {
        gesture = gesture.failOffsetY(failOffsetY);
      }

      return gesture;
    }, [
      enablePanToClose,
      handlePanGestureHandler.handleOnStart,
      handlePanGestureHandler.handleOnChange,
      handlePanGestureHandler.handleOnEnd,
      handlePanGestureHandler.handleOnFinalize,
      waitFor,
      simultaneousHandlers,
      activeOffsetX,
      activeOffsetY,
      failOffsetX,
      failOffsetY,
    ]);

    // Тап-жест (для закрытия)
    const tapGesture = useMemo(() => {
      return Gesture.Tap()
        .enabled(enableTapToClose)
        .runOnJS(true)
        .onEnd(() => {
          close(); // закрываем модалку
        });
    }, [close, enableTapToClose]);

    // Объединённый жест: если был свайп — пускай свайп, если тап — закрываем
    const combinedGesture = useMemo(() => {
      return Gesture.Race(panGesture, tapGesture);
    }, [panGesture, tapGesture]);

    // Анимация прозрачности
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
        animatedIndex.value,
        [-1, 0, 1],
        [0, 0.5, 0.5],
        Extrapolation.CLAMP,
      ),
    }));

    // Стили
    const containerStyle = useMemo(
      () => [
        {
          backgroundColor: "#000",
        },
        containerAnimatedStyle,
        style,
      ],
      [style, containerAnimatedStyle],
    );

    return (
      <GestureDetector gesture={combinedGesture}>
        <Animated.View style={containerStyle} />
      </GestureDetector>
    );
  },
);
