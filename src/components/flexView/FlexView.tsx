import * as React from "react";
import { forwardRef, memo, PropsWithChildren } from "react";
import { Animated, View, ViewProps } from "react-native";

import { FlexProps } from "./types";
import { useFlexProps } from "./useFlexProps";

type Props = FlexProps & ViewProps;

export const FlexView = memo(
  forwardRef<View, PropsWithChildren<Props>>((props, ref) => {
    const { ownProps, style, animated } = useFlexProps(props);

    const Component = animated ? Animated.View : View;

    return <Component ref={ref} style={style} {...ownProps} />;
  }),
);

export const Col = memo(
  forwardRef<View, PropsWithChildren<Props>>((props, ref) => (
    <FlexView ref={ref} col={true} {...props} />
  )),
);
export const Row = memo(
  forwardRef<View, PropsWithChildren<Props>>((props, ref) => (
    <FlexView ref={ref} row={true} {...props} />
  )),
);
