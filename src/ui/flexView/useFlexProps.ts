import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { FlexProps } from "./types";
import { useMemo } from "react";
import { flexPropsConverter } from "./flexPropsConverter";

export const useFlexProps = <
  OwnProps extends Object,
  TStyleSource extends ViewStyle | TextStyle | ImageStyle,
>(
  props: FlexProps<TStyleSource> & OwnProps,
  defaultProps?: Partial<FlexProps<TStyleSource>>,
) =>
  useMemo(() => {
    const flexProps = {} as Omit<FlexProps, "style">;
    const ownProps = {} as Omit<
      FlexProps<TStyleSource> & OwnProps,
      keyof FlexProps<TStyleSource>
    >;
    const styleSource = {} as TStyleSource;

    flexPropsConverter(
      { ...defaultProps, ...props },
      flexProps,
      ownProps,
      styleSource,
    );
    const style = StyleSheet.create({ style: styleSource });

    if (typeof props.debug === "string") {
      console.log(`FlexView::render ${props.debug}`); // 🐞 ✅
    }

    return {
      animated: props.animated,
      style: style.style,
      flexProps,
      ownProps,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
