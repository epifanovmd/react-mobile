import React, { FC, memo, PropsWithChildren, useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlexProps, useFlexProps } from "../flexView";
import { View } from "react-native";

export interface SafeAreaProps extends FlexProps {}

export const SafeArea: FC<PropsWithChildren<SafeAreaProps>> = memo(
  ({ children, ...rest }) => {
    const { style, ownProps } = useFlexProps(rest, {
      flexGrow: 1,
    });

    const { ...insets } = useSafeAreaInsets();

    const _style = useMemo(
      () => ({
        ...style,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }),
      [insets.bottom, insets.left, insets.right, insets.top, style],
    );

    return (
      <View style={_style} {...ownProps}>
        {children}
      </View>
    );
  },
);
