import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarParkingLightsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.3 9.2001C8.1 9.6001 9 10.5001 9 12.0001C9 13.5001 8.1 14.4001 7.3 14.8001C6.9 13.4001 6.9 10.6001 7.3 9.2001ZM6.5 7.0001C4.5 7.0001 4.5 17.0001 6.5 17.0001C8.5 17.0001 11 15.1001 11 12.0001C11 8.9001 8.5 7.0001 6.5 7.0001ZM16.7 9.2001C17 10.6001 17 13.4001 16.7 14.8001C15.9 14.4001 15 13.5001 15 12.0001C15 10.5001 15.9 9.6001 16.7 9.2001ZM17.5 7.0001C15.5 7.0001 13 8.9001 13 12.0001C13 15.1001 15.5 17.0001 17.5 17.0001C19.5 17.0001 19.5 7.0001 17.5 7.0001ZM4.9 6.2001L2.5 4.6001L1.4 6.3001L4 8.0001C4.2 7.3001 4.5 6.6001 4.9 6.2001ZM20 8.0001L22.6 6.3001L21.5 4.6001L19.1 6.2001C19.4 6.6001 19.8 7.2001 20 8.0001ZM4 16.0001L1.4 17.7001L2.5 19.4001L4.9 17.8001C4.6 17.4001 4.2 16.8001 4 16.0001ZM20.5 11.0001C20.5 11.3001 20.5 11.7001 20.5 12.0001C20.5 12.3001 20.5 12.6001 20.5 13.0001H24V11.0001H20.5ZM19.1 17.8001L21.5 19.4001L22.6 17.7001L20 16.0001C19.8 16.7001 19.5 17.4001 19.1 17.8001ZM3.5 12.0001C3.5 11.7001 3.5 11.4001 3.5 11.0001H0V13.0001H3.5C3.5 12.7001 3.5 12.3001 3.5 12.0001Z" />
    </Svg>
  );
};
