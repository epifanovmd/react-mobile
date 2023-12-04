import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MowerBagIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.95 14L10.82 12H14.76C15.5 12 16.21 12.43 16.55 13.11L17 14H11.95ZM23 18C23 19.66 21.66 21 20 21C18.7 21 17.6 20.16 17.18 19H11.65C11.09 20.18 9.89 21 8.5 21C7.11 21 5.91 20.18 5.35 19H2C1.45 19 1 18.55 1 18V11C1 10.67 1.17 10.36 1.44 10.17C1.71 10 2.06 9.95 2.37 10.07L7.43 12.09L3.42 5H1V3H4.58L11.37 15H20C21.66 15 23 16.34 23 18ZM7.34 14.21L3 12.5V17H5.05C5.24 15.7 6.13 14.64 7.34 14.21ZM10 17.5C10 16.67 9.33 16 8.5 16C7.67 16 7 16.67 7 17.5C7 18.33 7.67 19 8.5 19C9.33 19 10 18.33 10 17.5ZM21 18C21 17.45 20.55 17 20 17C19.45 17 19 17.45 19 18C19 18.55 19.45 19 20 19C20.55 19 21 18.55 21 18Z" />
    </Svg>
  );
};
