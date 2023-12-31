import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacLeoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20C15.38 19.92 14.08 18.62 14 17C14.16 15.39 14.5 13.8 15 12.26C15.54 10.55 15.87 8.79 16 7C15.93 4.27 13.73 2.07 11 2C8.26998 2.07 6.06998 4.27 5.99998 7C6.14998 8.53 6.49998 10.03 6.99998 11.5L7.20998 12.2C5.09998 11.53 2.85998 12.7 2.18998 14.8C1.49998 16.91 2.67998 19.16 4.78998 19.83C6.89998 20.5 9.13998 19.33 9.80998 17.22C9.93998 16.83 9.99998 16.41 9.99998 16C9.83998 14.27 9.49998 12.56 8.90998 10.92C8.46998 9.65 8.15998 8.34 7.99998 7C8.07998 5.38 9.37998 4.08 11 4C12.62 4.08 13.92 5.38 14 7C13.84 8.61 13.5 10.2 13 11.74C12.46 13.45 12.13 15.21 12 17C12.07 19.73 14.27 21.93 17 22C18.3261 22 19.5978 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17H20ZM5.99998 18C5.46955 18 4.96084 17.7893 4.58577 17.4142C4.21069 17.0391 3.99998 16.5304 3.99998 16C3.99998 15.4696 4.21069 14.9609 4.58577 14.5858C4.96084 14.2107 5.46955 14 5.99998 14C6.53041 14 7.03912 14.2107 7.41419 14.5858C7.78927 14.9609 7.99998 15.4696 7.99998 16C7.99998 16.5304 7.78927 17.0391 7.41419 17.4142C7.03912 17.7893 6.53041 18 5.99998 18Z" />
    </Svg>
  );
};
