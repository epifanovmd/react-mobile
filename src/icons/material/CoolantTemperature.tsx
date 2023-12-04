import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CoolantTemperatureIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.5 1C11.1022 1 10.7206 1.15804 10.4393 1.43934C10.158 1.72064 10 2.10218 10 2.5V14.5C9.37 14.97 9 15.71 9 16.5C9 17.163 9.26339 17.7989 9.73223 18.2678C10.2011 18.7366 10.837 19 11.5 19C12.163 19 12.7989 18.7366 13.2678 18.2678C13.7366 17.7989 14 17.163 14 16.5C14 15.71 13.63 15 13 14.5V13H17V11H13V9H17V7H13V5H17V3H13V2.5C13 2.10218 12.842 1.72064 12.5607 1.43934C12.2794 1.15804 11.8978 1 11.5 1ZM0 15V17C0.67 17 0.79 17.21 1.29 17.71C1.79 18.21 2.67 19 4 19C5.33 19 6.21 18.21 6.71 17.71C6.82 17.59 6.91 17.5 7 17.41V15.16C6.21 15.42 5.65 15.93 5.29 16.29C4.79 16.79 4.67 17 4 17C3.33 17 3.21 16.79 2.71 16.29C2.21 15.79 1.33 15 0 15ZM16 15V17C16.67 17 16.79 17.21 17.29 17.71C17.79 18.21 18.67 19 20 19C21.33 19 22.21 18.21 22.71 17.71C23.21 17.21 23.33 17 24 17V15C22.67 15 21.79 15.79 21.29 16.29C20.79 16.79 20.67 17 20 17C19.33 17 19.21 16.79 18.71 16.29C18.21 15.79 17.33 15 16 15ZM8 20C6.67 20 5.79 20.79 5.29 21.29C4.79 21.79 4.67 22 4 22C3.33 22 3.21 21.79 2.71 21.29C2.35 20.93 1.79 20.42 1 20.16V22.41C1.09 22.5 1.18 22.59 1.29 22.71C1.79 23.21 2.67 24 4 24C5.33 24 6.21 23.21 6.71 22.71C7.21 22.21 7.33 22 8 22C8.67 22 8.79 22.21 9.29 22.71C9.73 23.14 10.44 23.8 11.5 23.96C11.66 24 11.83 24 12 24C13.33 24 14.21 23.21 14.71 22.71C15.21 22.21 15.33 22 16 22C16.67 22 16.79 22.21 17.29 22.71C17.79 23.21 18.67 24 20 24C21.33 24 22.21 23.21 22.71 22.71C22.82 22.59 22.91 22.5 23 22.41V20.16C22.21 20.42 21.65 20.93 21.29 21.29C20.79 21.79 20.67 22 20 22C19.33 22 19.21 21.79 18.71 21.29C18.21 20.79 17.33 20 16 20C14.67 20 13.79 20.79 13.29 21.29C12.79 21.79 12.67 22 12 22C11.78 22 11.63 21.97 11.5 21.92C11.22 21.82 11.05 21.63 10.71 21.29C10.21 20.79 9.33 20 8 20Z" />
    </Svg>
  );
};
