import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SubmarineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 3.66992C6.78 4.52992 5.39 4.92992 4 4.99992H2V6.99992H4C5.37 6.99992 6.74 6.64992 8 5.99992C10.5 7.29992 13.5 7.29992 16 5.99992C17.26 6.64992 18.62 6.93992 20 6.99992H22V4.99992H20C18.61 4.99992 17.22 4.52992 16 3.66992C13.56 5.37992 10.44 5.37992 8 3.66992ZM16 8.66992L15 9.99992V11.9999H14L12 13.9999H9L6 15.9999L5 13.9999H4V15.9999L2 16.9999L4 17.9999V19.9999H5.14L6 17.9999L9 19.9999H20C20.5304 19.9999 21.0391 19.7892 21.4142 19.4141C21.7893 19.0391 22 18.5304 22 17.9999V15.9999C22 15.4695 21.7893 14.9608 21.4142 14.5857C21.0391 14.2106 20.5304 13.9999 20 13.9999H18L17 12.9999V11.9999H16V9.99992H17V8.66992H16Z" />
    </Svg>
  );
};
