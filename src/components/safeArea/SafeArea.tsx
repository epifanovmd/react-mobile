import React, { FC, memo, PropsWithChildren, useMemo } from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface SafeAreaProps extends ViewProps {
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
}

const withCondition = (
  withoutUndefined: boolean,
  value: boolean | undefined,
  style: ViewStyle,
) =>
  value === true || (withoutUndefined ? false : value === undefined)
    ? style
    : {};

export const SafeArea: FC<PropsWithChildren<SafeAreaProps>> = memo(
  ({ children, top, bottom, left, right, style, ...rest }) => {
    const { ...insets } = useSafeAreaInsets();

    const hasTrue =
      top === true || bottom === true || left === true || right === true;

    const _style = useMemo(
      () => [
        {
          flexGrow: 1,
          ...withCondition(hasTrue, top, { paddingTop: insets.top }),
          ...withCondition(hasTrue, bottom, { paddingBottom: insets.bottom }),
          ...withCondition(hasTrue, left, { paddingLeft: insets.left }),
          ...withCondition(hasTrue, right, { paddingRight: insets.right }),
        },
        style,
      ],
      [
        style,
        insets.bottom,
        insets.left,
        insets.right,
        insets.top,
        hasTrue,
        left,
        right,
        top,
        bottom,
      ],
    );

    return (
      <View {...rest} style={_style}>
        {children}
      </View>
    );
  },
);
