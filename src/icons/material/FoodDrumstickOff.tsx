import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodDrumstickOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8001 22.7002L13.6001 15.5002C13.3001 15.7002 13.0001 15.9002 12.7001 16.2002C11.6001 17.3002 9.8001 17.3002 8.7001 16.2002L7.7001 15.2002C6.6001 14.1002 6.6001 12.3002 7.8001 11.2002C8.0001 11.0002 8.2001 10.7002 8.4001 10.4002L1.1001 3.0002L2.4001 1.7002L22.1001 21.4002L20.8001 22.7002ZM8.1001 16.9002L7.1001 15.9002C6.9001 15.7002 6.8001 15.5002 6.6001 15.3002L4.1001 17.7002C3.5001 17.4002 2.9001 17.5002 2.4001 18.0002C1.8001 18.6002 1.8001 19.5002 2.4001 20.1002C2.7001 20.4002 3.0001 20.5002 3.4001 20.5002C3.4001 20.9002 3.6001 21.2002 3.8001 21.5002C4.4001 22.1002 5.3001 22.1002 5.9001 21.5002C6.4001 21.0002 6.5001 20.4002 6.2001 19.8002L8.7001 17.4002C8.5001 17.3002 8.3001 17.1002 8.1001 16.9002ZM20.2001 12.7002C23.0001 9.9002 22.6001 5.2002 19.1001 3.0002C17.1001 1.7002 14.4001 1.7002 12.4001 3.0002C11.0001 3.9002 10.1001 5.1002 9.7001 6.5002L17.5001 14.3002C18.5001 14.0002 19.4001 13.5002 20.2001 12.7002Z" />
    </Svg>
  );
};
