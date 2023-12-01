import React, { FC, memo, useCallback, useMemo } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
} from "react-native";
import { FlexProps, useFlexProps } from "../flexView";

export interface TouchableProps<T extends any = undefined>
  extends FlexProps,
    Omit<TouchableOpacityProps, "style" | "onPress"> {
  onPress?: (value: T, event: GestureResponderEvent) => void;
  ctx?: T;
}

interface Touchable {
  <T extends any = undefined>(props: TouchableProps<T>): ReturnType<FC>;
}

export const Touchable: Touchable = memo(
  ({ onPress, disabled, ctx, children, ...rest }) => {
    const { style, ownProps } = useFlexProps(rest);

    const _onPress = useCallback(
      (event: GestureResponderEvent) => {
        onPress?.(ctx as any, event);
      },
      [ctx, onPress],
    );

    const _style = useMemo(
      () => ({ opacity: disabled ? 0.3 : 1, ...style }),
      [disabled, style],
    );

    return (
      <TouchableOpacity
        onPress={_onPress}
        activeOpacity={0.7}
        style={_style}
        disabled={disabled || !onPress}
        {...ownProps}
      >
        {children}
      </TouchableOpacity>
    );
  },
);
