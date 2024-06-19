import { FlexProps, FlexStyle } from "./types";

const isBoolean = <U>(term: boolean | U): term is boolean =>
  typeof term === "boolean";

type HasTrueType<T, R> = T extends true ? R : never;

// styleMapGenerator
export const smg = <
  FPN extends keyof FlexProps<FlexStyle>,
  SN extends keyof FlexStyle = keyof FlexStyle,
>(
  flexPropsName: FPN[],
  style?: SN[],
  positiveValue?: HasTrueType<FlexProps<FlexStyle>[FPN], FlexStyle[SN]>,
  negativeValue?: HasTrueType<FlexProps<FlexStyle>[FPN], FlexStyle[SN]>,
): Record<
  FPN,
  (value: FlexProps<FlexStyle>[FPN]) => Record<SN, FlexStyle[SN]>
> =>
  flexPropsName.reduce<any>((acc, item) => {
    acc[item] = (value: FlexProps<FlexStyle>[FPN]) =>
      (style || (flexPropsName as any[])).reduce<any>((ac, itm) => {
        ac[itm] = isBoolean(value)
          ? positiveValue || negativeValue || value
          : value;

        return ac;
      }, {}) as Record<SN, FlexStyle[SN]>;

    return acc;
  }, {});

// TransformStyleMapGenerator
export const tSmg = <FPN extends keyof FlexProps<FlexStyle>>(
  flexPropsName: FPN,
) => ({
  [flexPropsName]: (value: FlexProps<FlexStyle>[FPN]) => ({
    transform: [{ [flexPropsName]: value }],
  }),
});
