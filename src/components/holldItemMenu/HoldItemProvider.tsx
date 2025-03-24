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

import { Backdrop } from "./backdrop";
import { HoldItemContext } from "./HoldItemContext";
import { HoldMenu } from "./holdMenu";
import { HoldMenuContext } from "./holdMenu/types";
import { useDeviceOrientation } from "./hooks";
import { IHoldItemValue } from "./types";
import {
  calculateMenuHeight,
  getAnchorPosition,
  TransformAnchorPosition,
} from "./utils/calculations";
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_TRANSFORM_DURATION,
  IS_IOS,
  SPRING_CONFIGURATION,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "./utils/constants";

export interface HoldItemProviderProps {
  theme?: "dark" | "light";
  safeAreaInsets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };

  onOpen?: () => void;
  onClose?: () => void;
  disableMove?: boolean;
}

const menuPropsDefaultValue: HoldMenuContext = {
  itemHeight: 0,
  itemWidth: 0,
  itemX: 0,
  itemY: 0,
  items: [],
  data: undefined,
  anchorPosition: "top-center",
  menuHeight: 0,
  transformValue: 0,
};

export const HoldItemProvider: FC<PropsWithChildren<HoldItemProviderProps>> =
  memo(
    ({
      children,
      theme: selectedTheme,
      safeAreaInsets = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      onOpen,
      onClose,
      disableMove = false,
    }) => {
      const deviceOrientation = useDeviceOrientation();
      const [value, setValue] = useState<IHoldItemValue<any> | null>(null);
      const state = useSharedValue<CONTEXT_MENU_STATE>(
        CONTEXT_MENU_STATE.PENDING,
      );

      const transformMenu =
        useSharedValue<TransformAnchorPosition>("top-right");
      const transformContent = useSharedValue<number>(0);
      const theme = useSharedValue<"light" | "dark">(selectedTheme || "light");
      const menuProps = useSharedValue<HoldMenuContext>(menuPropsDefaultValue);

      const menuHeight = useMemo(() => {
        const items = value?.menuItems ?? [];
        const itemsWithSeparator = items.filter(item => item.withSeparator);

        return calculateMenuHeight(items.length, itemsWithSeparator.length);
      }, [value?.menuItems]);

      const measured = useMemo(() => {
        const maxHeight =
          WINDOW_HEIGHT -
          (IS_IOS ? menuHeight : menuHeight * 2) -
          safeAreaInsets.top -
          safeAreaInsets.bottom;

        return {
          top: value ? value.measured.pageY : 0,
          left: value ? value.measured.pageX : 0,
          width: value ? value.measured.width : 0,
          height: value
            ? value.measured
              ? value.measured.height > maxHeight
                ? maxHeight
                : value.measured.height
              : 0
            : 0,
          maxHeight,
        };
      }, [menuHeight, safeAreaInsets.bottom, safeAreaInsets.top, value]);

      useEffect(() => {
        theme.value = selectedTheme || "light";
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [selectedTheme]);

      const handleClose = useCallback(() => {
        if (value?.onClose) {
          value.onClose();
        }
      }, [value]);

      useAnimatedReaction(
        () => state.value,
        stateValue => {
          switch (stateValue) {
            case CONTEXT_MENU_STATE.ACTIVE: {
              if (onOpen) {
                runOnJS(onOpen)();
              }
              break;
            }
            case CONTEXT_MENU_STATE.END: {
              if (onClose) {
                runOnJS(onClose)();
              }

              runOnJS(handleClose)();
              transformContent.value = 0;
              menuProps.value = menuPropsDefaultValue;

              break;
            }
          }
        },
        [state, handleClose, onOpen, onClose],
      );

      useEffect(() => {
        if (value) {
          state.value = CONTEXT_MENU_STATE.ACTIVE;
          transformContent.value = calculateTransformValue();
          transformMenu.value = getAnchorPosition(
            measured.left,
            measured.width,
            deviceOrientation === "portrait" ? WINDOW_WIDTH : WINDOW_HEIGHT,
          );

          setTimeout(() => {
            menuProps.value = {
              itemHeight: measured.height,
              itemWidth: measured.width,
              itemY: measured.top,
              itemX: measured.left,
              anchorPosition: transformMenu.value,
              menuHeight: menuHeight,
              items: value.menuItems ?? [],
              transformValue: transformContent.value,
              data: value.data,
            };
          }, 50);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value]);

      const calculateTransformValue = useCallback(() => {
        "worklet";
        const height =
          deviceOrientation === "portrait" ? WINDOW_HEIGHT : WINDOW_WIDTH;
        const isTopMenu = transformMenu.value.includes("bottom");

        let transformY = 0;

        if (!disableMove && value) {
          const topPosition = isTopMenu
            ? value.measured.pageY - menuHeight
            : value.measured.pageY;
          const maxTopPosition = safeAreaInsets.top;

          const bottomPosition = isTopMenu
            ? measured.top + measured.height
            : measured.top +
              measured.height +
              (IS_IOS ? menuHeight : menuHeight * 2);
          const maxBottomPosition = height - safeAreaInsets.bottom;

          if (
            topPosition < maxTopPosition &&
            bottomPosition > maxBottomPosition
          ) {
            transformY = isTopMenu
              ? maxTopPosition - topPosition
              : maxBottomPosition - bottomPosition;
          } else if (topPosition < maxTopPosition) {
            transformY = maxTopPosition - topPosition;
            if (!isTopMenu && transformY + bottomPosition > maxBottomPosition) {
              transformY = maxBottomPosition - bottomPosition;
            }
          } else if (bottomPosition > maxBottomPosition) {
            transformY = maxBottomPosition - bottomPosition;
            if (isTopMenu && topPosition + transformY < maxTopPosition) {
              transformY = maxTopPosition - topPosition;
            }
          }
        }

        return transformY;
      }, [
        deviceOrientation,
        disableMove,
        measured.height,
        measured.top,
        menuHeight,
        safeAreaInsets.bottom,
        safeAreaInsets.top,
        transformMenu.value,
        value,
      ]);

      const animatedPortalStyle = useAnimatedStyle(() => {
        const opacity =
          state.value === CONTEXT_MENU_STATE.ACTIVE
            ? 1
            : withDelay(
                HOLD_ITEM_TRANSFORM_DURATION,
                withTiming(0, { duration: 0 }),
              );

        const translateY = disableMove
          ? 0
          : state.value === CONTEXT_MENU_STATE.ACTIVE
          ? withSpring(transformContent.value, SPRING_CONFIGURATION)
          : withTiming(0, { duration: HOLD_ITEM_TRANSFORM_DURATION }, () => {
              runOnJS(setValue)(null);
            });

        return {
          opacity,
          transform: [{ translateY }],
        };
      });

      const animatedPortalProps = useAnimatedProps<ViewProps>(() => {
        const isActive = state.value === CONTEXT_MENU_STATE.ACTIVE;

        return {
          pointerEvents: isActive ? "auto" : "none",
        };
      });

      const contextValue = useMemo(
        () => ({
          state,
          theme,
          menuProps,
          setValue,
          safeAreaInsets,
        }),
        [state, theme, menuProps, safeAreaInsets],
      );

      return (
        <GestureHandlerRootView style={styles.wrap}>
          <HoldItemContext.Provider value={contextValue}>
            <PortalProvider>
              {children}
              <Backdrop />
              {value?.content && (
                <Animated.ScrollView
                  style={[styles.holdItem, animatedPortalStyle, measured]}
                  animatedProps={animatedPortalProps}
                >
                  {value.content}
                </Animated.ScrollView>
              )}

              <HoldMenu />
            </PortalProvider>
          </HoldItemContext.Provider>
        </GestureHandlerRootView>
      );
    },
  );

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  holdItem: {
    zIndex: 10,
    position: "absolute",
  },
  menuWrapper: {
    position: "absolute",
    left: 0,
    zIndex: 10,
  },
});
