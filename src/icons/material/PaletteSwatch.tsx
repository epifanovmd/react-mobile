import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PaletteSwatchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.53007 19.65L3.87007 20.21V11.18L1.44007 17.04C1.03007 18.06 1.50007 19.23 2.53007 19.65ZM22.0301 15.95L17.0701 4C16.7601 3.23 16.0301 2.77 15.2601 2.75C15.0001 2.75 14.7301 2.79 14.4701 2.9L7.10007 5.95C6.35007 6.26 5.89007 7 5.87007 7.75C5.86007 8 5.91007 8.29 6.00007 8.55L11.0001 20.5C11.2901 21.28 12.0301 21.74 12.8101 21.75C13.0701 21.75 13.3301 21.7 13.5801 21.6L20.9401 18.55C21.9601 18.13 22.4501 16.96 22.0301 15.95ZM7.88007 8.75C7.61486 8.75 7.3605 8.64464 7.17297 8.45711C6.98543 8.26957 6.88007 8.01522 6.88007 7.75C6.88007 7.48478 6.98543 7.23043 7.17297 7.04289C7.3605 6.85536 7.61486 6.75 7.88007 6.75C8.43007 6.75 8.88007 7.2 8.88007 7.75C8.88007 8.3 8.43007 8.75 7.88007 8.75ZM5.88007 19.75C5.88007 20.2804 6.09079 20.7891 6.46586 21.1642C6.84093 21.5393 7.34964 21.75 7.88007 21.75H9.33007L5.88007 13.41V19.75Z" />
    </Svg>
  );
};
