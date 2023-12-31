import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FishOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8001 22.7002L15.7001 17.6002C15.1001 18.3002 14.6001 18.9002 14.1001 19.3002C13.3001 20.0002 12.7001 20.0002 12.0001 20.0002L12.8001 17.0002C9.5001 16.8002 6.6001 15.4002 5.8001 13.6002C5.7001 14.1002 5.6001 14.5002 5.4001 14.8002C4.7001 16.0002 3.3001 16.0002 2.0001 16.0002C3.1001 16.0002 3.5001 14.4002 3.5001 12.5002C3.5001 10.6002 3.1001 9.0002 2.0001 9.0002C3.3001 9.0002 4.7001 9.0002 5.3001 10.2002C5.5001 10.5002 5.6001 11.0002 5.7001 11.4002C6.0001 10.7002 6.7001 10.0002 7.6001 9.5002L1.1001 3.0002L2.4001 1.7002L22.1001 21.4002L20.8001 22.7002ZM9.8001 6.60019L9.0001 5.0002C11.0001 5.0002 13.0001 5.0002 14.3001 5.7002C15.4001 6.3002 16.1001 7.3002 16.7001 8.4002C19.6001 9.10019 22.0001 10.7002 22.0001 12.5002C22.0001 13.8002 20.8001 15.0002 19.0001 15.8002L9.8001 6.60019ZM16.0001 12.0002C16.0001 12.6002 16.4001 13.0002 17.0001 13.0002C17.6001 13.0002 18.0001 12.6002 18.0001 12.0002C18.0001 11.4002 17.6001 11.0002 17.0001 11.0002C16.4001 11.0002 16.0001 11.4002 16.0001 12.0002Z" />
    </Svg>
  );
};
