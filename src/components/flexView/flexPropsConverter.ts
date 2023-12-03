import { FlexProps } from './types';
import { TextStyle, ViewStyle } from 'react-native';
import { flexPropsMap } from './flexPropsMap';
import { resolveStyleProp } from '../../helpers';

export const flexPropsConverter = <
  TProps extends FlexProps,
  TOwnProps = Omit<TProps, keyof FlexProps>,
  TStyleSource extends TextStyle & ViewStyle = TextStyle & ViewStyle,
>(
  props: TProps,
  flexProps: Omit<FlexProps, 'style'>,
  outOwnProps: TOwnProps,
  outStyleSource: TStyleSource,
) => {
  const fp = flexProps as any;
  const op = outOwnProps as any;
  const os = outStyleSource as any;

  for (const key in props) {
    const flexTransformer =
      flexPropsMap[
        key as keyof Omit<
          FlexProps,
          'style' | 'rotate' | 'translateX' | 'translateY' | 'scale'
        >
      ];

    if (props.hasOwnProperty(key)) {
      if (flexTransformer) {
        const propValue = props[key];
        const styleParams = flexTransformer(propValue as any);

        for (const styleKey in styleParams) {
          if (styleParams.hasOwnProperty(styleKey)) {
            if (styleKey === 'transform') {
              os[styleKey] = [
                ...(os[styleKey] || []),
                ...styleParams[styleKey],
              ];
            } else {
              os[styleKey] = styleParams[styleKey];
            }
          }
        }
        if (key !== 'style') {
          fp[key] = props[key];
        }
      } else if (key !== 'style') {
        op[key] = props[key];
      }
    }
  }

  if (props.style) {
    Object.assign(os, resolveStyleProp(props.style));
  }
};
