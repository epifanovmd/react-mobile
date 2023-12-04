import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneLockOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5 5H6.5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5ZM19 19C17.7 18.9 16.4 18.6 15.2 18.2L16.4 17C17.2 17.2 18.1 17.4 19 17.4V19ZM19.2 4H15.8V3.5C15.8 2.56 16.56 1.8 17.5 1.8C18.44 1.8 19.2 2.56 19.2 3.5V4ZM20 4V3.5C20 2.83696 19.7366 2.20107 19.2678 1.73223C18.7989 1.26339 18.163 1 17.5 1C16.837 1 16.2011 1.26339 15.7322 1.73223C15.2634 2.20107 15 2.83696 15 3.5V4C14.7348 4 14.4804 4.10536 14.2929 4.29289C14.1054 4.48043 14 4.73478 14 5V9C14 9.26522 14.1054 9.51957 14.2929 9.70711C14.4804 9.89464 14.7348 10 15 10H20C20.2652 10 20.5196 9.89464 20.7071 9.70711C20.8946 9.51957 21 9.26522 21 9V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4Z" />
    </Svg>
  );
};
