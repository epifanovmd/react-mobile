import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GuitarPickIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 4.1C18.1 3.3 17 2.8 15.8 2.5C15.5 2.4 13.6 2 12.2 2C12.2 2 12.1 2 12 2C12 2 11.9 2 11.8 2C10.4 2 8.39999 2.4 8.09999 2.5C6.99999 2.8 5.89999 3.3 4.99999 4.1C2.99999 5.9 2.99999 8.7 3.99999 11C4.99999 13.5 6.09999 15.7 7.59999 17.9C8.79999 19.6 10.1 22 12 22C13.9 22 15.2 19.6 16.5 17.9C18 15.8 19.1 13.5 20.1 11C21 8.7 21 5.9 19 4.1Z" />
    </Svg>
  );
};
