import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyBdtIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.09 10.5V9H9.58997V4.5C9.58997 4.10218 9.43193 3.72064 9.15063 3.43934C8.86932 3.15804 8.48779 3 8.08997 3C7.69214 3 7.31061 3.15804 7.02931 3.43934C6.748 3.72064 6.58997 4.10218 6.58997 4.5C6.58997 4.89782 6.748 5.27936 7.02931 5.56066C7.31061 5.84196 7.69214 6 8.08997 6V9H5.08997V10.5H8.08997V16.7C8.08997 19.06 9.99997 20.97 12.34 21C14.68 20.96 16.54 19.04 16.5 16.7C16.5 15.11 15.75 13.61 14.5 12.62C14.28 12.44 14.05 12.28 13.8 12.15C13.58 12.05 13.34 12 13.1 12C12.39 12 11.74 12.39 11.39 13C11.2 13.3 11.1 13.65 11.1 14C11.11 15.1 12 16 13.11 16C13.73 16 14.31 15.69 14.69 15.2C14.9 15.67 15 16.18 15 16.7C15.04 18.2 13.86 19.45 12.34 19.5C10.81 19.5 9.57997 18.23 9.58997 16.7V10.5H18.09Z" />
    </Svg>
  );
};
