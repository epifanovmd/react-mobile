import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyBottleOutlineIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M11.28 2.79994L10.78 3.29994C9.43998 2.54994 7.83998 2.39994 6.40998 2.86994L6.32998 2.79994C5.35998 1.81994 3.76998 1.81994 2.79998 2.79994C1.82998 3.77994 1.81998 5.35994 2.79998 6.32994L2.86998 6.40994C2.39998 7.83994 2.54998 9.43994 3.29998 10.7799L2.79998 11.2799C2.20998 11.8699 2.20998 12.8099 2.79998 13.3999L4.20998 14.8199C4.79998 15.3999 5.73998 15.3999 6.32998 14.8199L6.67998 14.4599L13.76 21.5299C14.34 22.1199 15.29 22.1199 15.88 21.5299L21.53 15.8799C22.12 15.2899 22.12 14.3399 21.53 13.7499L14.46 6.67994L14.82 6.32994C15.4 5.73994 15.4 4.79994 14.82 4.20994L13.4 2.78994C12.82 2.20994 11.87 2.20994 11.28 2.79994ZM4.24998 7.04994C4.32998 6.70994 4.46998 6.37994 4.65998 6.06994L3.85998 5.26994C3.74998 5.15994 3.66998 5.03994 3.62998 4.89994C3.49998 4.55994 3.56998 4.13994 3.85998 3.85994C4.14998 3.57994 4.55998 3.49994 4.89998 3.62994C5.03998 3.66994 5.15998 3.74994 5.26998 3.85994L6.06998 4.65994C6.37998 4.46994 6.70998 4.32994 7.04998 4.24994C7.90998 3.99994 8.82998 4.05994 9.64998 4.41994L4.41998 9.64994C4.05998 8.82994 3.99998 7.90994 4.24998 7.04994ZM20.47 14.8199L14.82 20.4699L7.74998 13.3999L13.4 7.74994L20.47 14.8199ZM13.76 5.26994L5.26998 13.7599L3.85998 12.3399L12.34 3.85994L13.76 5.26994ZM14.82 11.6299L11.63 14.8199L10.57 13.7599L13.76 10.5699L14.82 11.6299ZM16.94 13.7599L13.76 16.9399L12.69 15.8799L15.88 12.6899L16.94 13.7599Z" />
    </Svg>
  );
};
