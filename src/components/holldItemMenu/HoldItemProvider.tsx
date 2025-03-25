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
import { LayoutChangeEvent, StyleSheet, ViewProps } from "react-native";
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
import {
  useDeviceOrientation,
  usePosition,
  useTransformContent,
} from "./hooks";
import { useProcessedMeasured } from "./hooks/useProcessedMeasured";
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
  duration?: number;
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
      duration = HOLD_ITEM_DURATION,
    }) => {
      const orientation = useDeviceOrientation();
      const [value, setValue] = useState<IHoldItemValue<any> | null>(null);
      const state = useSharedValue<CONTEXT_MENU_STATE>(
        CONTEXT_MENU_STATE.PENDING,
      );
      const menuHeight = useSharedValue<number>(0);
      const processedPosition = useProcessedMeasured(
        value?.measured,
        menuHeight,
        safeAreaInsets,
      );
      const position = usePosition(
        state,
        processedPosition,
        duration,
        value?.targetPositions,
      );
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
        if (!value?.targetPositions) {
          menuHeight.value = event.nativeEvent.layout.height;
        }
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

      useEffect(() => {
        state.value = CONTEXT_MENU_STATE.END;
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [orientation]);

      const animatedPortalStyle = useAnimatedStyle(() => {
        const isActive = state.value === CONTEXT_MENU_STATE.ACTIVE;

        return {
          ...position.value,
          opacity: isActive
            ? 1
            : withDelay(duration, withTiming(0, { duration: 0 })),
          transform: [
            {
              translateY: disableMove
                ? 0
                : isActive
                ? withSpring(transformContent.value, SPRING_CONFIGURATION)
                : withTiming(0, { duration }),
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
          duration: value?.duration ?? duration,
        }),
        [
          state,
          theme,
          value?.data,
          position,
          safeAreaInsets,
          value?.duration,
          duration,
        ],
      );

      return (
        <GestureHandlerRootView style={styles.wrap}>
          <HoldItemContext.Provider value={contextValue}>
            <PortalProvider>
              {children}
              <Backdrop />
              <Animated.ScrollView
                style={[styles.holdItem, animatedPortalStyle]}
                animatedProps={animatedPortalProps}
                bounces={false}
                contentContainerStyle={styles.content}
              >
                {value?.content}
              </Animated.ScrollView>
              {value?.menu && (
                <HoldMenu
                  items={value.menu}
                  transformContent={transformContent}
                  menuPosition={menuPosition}
                  onLayout={onChangeMenuHeight}
                />
              )}
            </PortalProvider>
          </HoldItemContext.Provider>
        </GestureHandlerRootView>
      );
    },
  );

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  holdItem: {
    flex: 1,
    zIndex: 10,
    position: "absolute",
    borderRadius: 8,
  },
  content: {
    flexGrow: 1,
  },
});
