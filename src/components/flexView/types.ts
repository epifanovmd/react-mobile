import {
  Animated,
  ColorValue,
  FlexAlignType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

type AnimatedProps<T> = Animated.AnimatedProps<T>;
type WithAnimatedValue<T> = Animated.WithAnimatedValue<T>;

export type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type AlignSelfType = "auto" | FlexAlignType;
export type FlexWrapType = "wrap" | "nowrap" | "wrap-reverse";
export type AlignContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around";

type PaddingProps = {
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  padding?: number | string;
  paddingStart?: number | string;
  paddingEnd?: number | string;
};

type MarginProps = {
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  margin?: number | string;
};

type PaddingGridProps = {
  // paddingLeft
  pl?: number;
  // paddingRight
  pr?: number;
  // paddingTop
  pt?: number;
  // paddingBottom
  pb?: number;
  // paddingVertical
  pv?: number;
  // paddingHorizontal
  ph?: number;
  // padding
  pa?: number;
};

type MargingGridProps = {
  // marginLeft
  ml?: number;
  // marginRight
  mr?: number;
  // marginTop
  mt?: number;
  // marginBottom
  mb?: number;
  // marginVertical
  mv?: number;
  // marginHorizontal
  mh?: number;
  // margin
  ma?: number;
};

type SideProps = {
  // Более короткая запись <Col left/>, вместо <Col left={0}/>
  left?: number | string | true;
  // Более короткая запись <Col right/>, вместо <Col right={0}/>
  right?: number | string | true;
  // Более короткая запись <Col top/>, вместо <Col top={0}/>
  top?: number | string | true;
  // Более короткая запись <Col bottom/>, вместо <Col bottom={0}/>
  bottom?: number | string | true;
};

type SizeProps = {
  // Более короткая запись <Row height/>, вместо <Row height={'100%'}/>
  height?: number | string | true;
  minHeight?: number | string;
  maxHeight?: number | string;
  // Более короткая запись <Col width/>, вместо <Col width={'100%'}/>
  width?: number | string | true;
  minWidth?: number | string;
  maxWidth?: number | string;
};

type FlexLayoutProps = {
  // Более короткая запись <Col flex/>, вместо <Col flex={1}/>
  flex?: number | true;
  // Более короткая запись <Col flexGrow/>, вместо <Col flexGrow={1}/>
  flexGrow?: number | true;
  flexBasis?: number | string;
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  // Более короткая запись <Col flexShrink/>, вместо <Col flexShrink={1}/>
  flexShrink?: number | true;
};

type FlexDirectionProps = {
  // flexDirection: 'row'
  row?: true;
  // flexDirection: 'column'
  col?: true;
  wrap?: FlexWrapType | true;
};

type AlignProps = {
  alignItems?: FlexAlignType;
  alignSelf?: AlignSelfType;
  justifyContent?: JustifyContentType;
  centerContent?: true;
  alignContent?: AlignContentType;
};

type PositionProps = {
  // position='absolute'
  absolute?: true;
  absoluteFill?: true;
  zIndex?: number;
};

type BorderProps = {
  // borderRadius
  radius?: WithAnimatedValue<number>;
  topRadius?: WithAnimatedValue<number>;
  bottomRadius?: WithAnimatedValue<number>;
  leftRadius?: WithAnimatedValue<number>;
  rightRadius?: WithAnimatedValue<number>;
  // circle - диаметр круга
  circle?: number;
  overflow?: "visible" | "hidden" | "scroll";
  borderColor?: WithAnimatedValue<ColorValue>;
  borderWidth?: WithAnimatedValue<number>;
  borderBottomWidth?: WithAnimatedValue<number>;
  borderTopWidth?: WithAnimatedValue<number>;
  borderLeftWidth?: WithAnimatedValue<number>;
  borderRightWidth?: WithAnimatedValue<number>;
};

type TransformProps = {
  rotate?: string;
  translateX?: number;
  translateY?: number;
  scale?: number;
};

type ShadowProps = {
  elevation?: number;
};

type DebugProps = {
  // true - красит фон красным, 'любой текст' - выведет указанный текст в лог из render
  debug?: true | string;
};

type ColorProps = {
  bg?: string;
  opacity?: number | string;
};

type TextProps = {
  color?: WithAnimatedValue<ColorValue>;
  fontFamily?: string;
  fontSize?: number | Animated.Animated;
  fontStyle?: "normal" | "italic";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  letterSpacing?: number | Animated.Animated;
  lineHeight?: number | Animated.Animated;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
  textDecorationColor?: WithAnimatedValue<ColorValue>;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
};

type CommonFlexProps = AnimatedProps<PaddingGridProps> &
  AnimatedProps<MargingGridProps> &
  AnimatedProps<SideProps> &
  AnimatedProps<SizeProps> &
  AnimatedProps<PaddingProps> &
  AnimatedProps<MarginProps> &
  FlexLayoutProps &
  FlexDirectionProps &
  AlignProps &
  PositionProps &
  DebugProps &
  ShadowProps &
  BorderProps &
  AnimatedProps<TransformProps> &
  AnimatedProps<ColorProps>;

export type FlexStyle = ViewStyle & TextStyle;

export type FlexProps<
  TStyleSource extends ViewStyle | TextStyle | ImageStyle = ViewStyle,
> = (Omit<TextStyle, keyof ViewStyle> extends TStyleSource
  ? CommonFlexProps & TextProps
  : CommonFlexProps) & {
  animated?: true;
  style?: StyleProp<TStyleSource>;
};
