import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LockClockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.5 2C6 2 4 4 4 6.5V7C2.89 7 2 7.89 2 9V18C2 19.11 2.89 20 4 20H8.72C10.18 21.29 12.06 22 14 22C16.1217 22 18.1566 21.1571 19.6569 19.6569C21.1571 18.1566 22 16.1217 22 14C22 11.8783 21.1571 9.84344 19.6569 8.34315C18.1566 6.84285 16.1217 6 14 6C13.66 6 13.32 6.03 13 6.08C12.76 3.77 10.82 2 8.5 2ZM8.5 4C9.16304 4 9.79893 4.26339 10.2678 4.73223C10.7366 5.20107 11 5.83696 11 6.5V7H6V6.5C6 5.83696 6.26339 5.20107 6.73223 4.73223C7.20107 4.26339 7.83696 4 8.5 4ZM14 8C15.5913 8 17.1174 8.63214 18.2426 9.75736C19.3679 10.8826 20 12.4087 20 14C20 15.5913 19.3679 17.1174 18.2426 18.2426C17.1174 19.3679 15.5913 20 14 20C12.4087 20 10.8826 19.3679 9.75736 18.2426C8.63214 17.1174 8 15.5913 8 14C8 12.4087 8.63214 10.8826 9.75736 9.75736C10.8826 8.63214 12.4087 8 14 8ZM13 10V15L16.64 17.19L17.42 15.9L14.5 14.15V10H13Z" />
    </Svg>
  );
};
