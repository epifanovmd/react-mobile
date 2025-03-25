import { PortalProvider } from "@gorhom/portal";
import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StyleSheet, ViewProps } from "react-native";
import { LayoutChangeEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedProps,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { EdgeInsets } from "react-native-safe-area-context";

import { Backdrop } from "./backdrop";
import { HoldItemContext, IHoldItemContext } from "./HoldItemContext";
import { HoldMenu } from "./holdMenu";
import { usePosition, useTransformContent } from "./hooks";
import { IHoldItemValue } from "./types";
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_DURATION,
  SPRING_CONFIGURATION,
  TMenuPosition,
} from "./utils";

export interface HoldItemProviderProps {
  theme?: "dark" | "light";
  safeAreaInsets?: EdgeInsets;
  menuPosition?: TMenuPosition;
  onOpen?: () => void;
  onClose?: () => void;
  disableMove?: boolean;
}

export const HoldItemProvider: FC<PropsWithChildren<HoldItemProviderProps>> =
  memo(
    ({
      children,
      theme = "light",
      safeAreaInsets = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      menuPosition,
      onOpen,
      onClose,
      disableMove = false,
    }) => {
      const [value, setValue] = useState<IHoldItemValue<any> | null>(null);
      const state = useSharedValue<CONTEXT_MENU_STATE>(
        CONTEXT_MENU_STATE.PENDING,
      );
      const menuHeight = useSharedValue<number>(0);
      const position = usePosition(value?.measured, safeAreaInsets, menuHeight);
      const transformContent = useTransformContent(
        state,
        position,
        safeAreaInsets,
        menuHeight,
        disableMove,
      );

      const handleClose = useCallback(() => {
        if (onClose) {
          onClose();
        }

        if (value?.onClose) {
          value.onClose();
        }
      }, [onClose, value]);

      const onChangeMenuHeight = (event: LayoutChangeEvent) => {
        menuHeight.value = event.nativeEvent.layout.height;
      };

      useAnimatedReaction(
        () => state.value,
        stateValue => {
          if (stateValue === CONTEXT_MENU_STATE.ACTIVE) {
            onOpen && runOnJS(onOpen)();
          }
          if (stateValue === CONTEXT_MENU_STATE.END) {
            runOnJS(handleClose)();
          }
        },
      );

      useEffect(() => {
        if (value) {
          state.value = CONTEXT_MENU_STATE.ACTIVE;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value]);

      const animatedPortalStyle = useAnimatedStyle(() => {
        const isActive = state.value === CONTEXT_MENU_STATE.ACTIVE;

        return {
          ...position.value,
          // backgroundColor: "red",
          // width: "auto",
          opacity: isActive
            ? 1
            : withDelay(HOLD_ITEM_DURATION, withTiming(0, { duration: 0 })),
          transform: [
            {
              translateY: disableMove
                ? 0
                : isActive
                ? withSpring(transformContent.value, SPRING_CONFIGURATION)
                : withTiming(0, { duration: HOLD_ITEM_DURATION }),
            },
          ],
        };
      }, [disableMove]);

      const animatedPortalProps = useAnimatedProps<ViewProps>(() => {
        const isActive = state.value === CONTEXT_MENU_STATE.ACTIVE;

        return {
          pointerEvents: isActive ? "auto" : "none",
        };
      });

      const contextValue = useMemo<IHoldItemContext>(
        () => ({
          state,
          theme,
          data: value?.data,
          position,
          setValue,
          safeAreaInsets,
        }),
        [state, theme, value?.data, position, safeAreaInsets],
      );

      return (
        <GestureHandlerRootView style={styles.wrap}>
          <HoldItemContext.Provider value={contextValue}>
            <PortalProvider>
              {children}
              <Backdrop />
              {value?.content && (
                <Animated.ScrollView
                  style={[styles.holdItem, animatedPortalStyle]}
                  animatedProps={animatedPortalProps}
                >
                  {value.content}
                </Animated.ScrollView>
              )}
              <HoldMenu
                data={value?.data}
                transformContent={transformContent}
                items={value?.menu}
                menuPosition={menuPosition}
                onLayout={onChangeMenuHeight}
              />
            </PortalProvider>
          </HoldItemContext.Provider>
        </GestureHandlerRootView>
      );
    },
  );

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  holdItem: { zIndex: 10, position: "absolute" },
});
