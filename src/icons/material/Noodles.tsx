import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NoodlesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95C19.21 18.44 17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95C2.57 15.47 2 13.81 2 12H5V4L22 2V3ZM6 4.88V6H7V4.78L6 4.88ZM6 7V12H7V7H6ZM9 12V7H8V12H9ZM9 6V4.55L8 4.64V6H9Z" />
    </Svg>
  );
};
