import React, { FC, memo } from "react";
import {
  Animated,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import { FlexProps, useFlexProps } from "../flexView";

export interface TextProps extends FlexProps<TextStyle>, RNTextProps {
  text?: string;
  children?: string;
}

export const Text: FC<TextProps> = memo(({ text, children, ...rest }) => {
  const { ownProps, style, animated } = useFlexProps(rest);

  const Component = animated ? Animated.Text : RNText;

  return (
    <Component style={style} {...ownProps}>
      {text ?? children}
    </Component>
  );
});
