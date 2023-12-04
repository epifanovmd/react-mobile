import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyWirelessIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.9001 5.89961L6.3001 7.29961C9.4001 4.19961 14.5001 4.19961 17.6001 7.29961L19.0001 5.89961C15.2001 1.99961 8.8001 1.99961 4.9001 5.89961ZM7.8001 8.79961L9.2001 10.1996C10.8001 8.59961 13.3001 8.59961 14.9001 10.1996L16.3001 8.79961C13.9001 6.39961 10.1001 6.39961 7.8001 8.79961ZM11.8001 14.9996C11.0001 12.6996 8.4001 11.3996 6.1001 12.2996C3.8001 13.1996 2.4001 15.6996 3.3001 17.9996C4.2001 20.2996 6.7001 21.5996 9.0001 20.6996C10.3001 20.1996 11.3001 19.1996 11.7001 17.9996H15.0001V20.9996H18.0001V17.9996H21.0001V14.9996H11.8001ZM7.5001 17.9996C6.7001 17.9996 6.0001 17.2996 6.0001 16.4996C6.0001 15.6996 6.7001 14.9996 7.5001 14.9996C8.3001 14.9996 9.0001 15.6996 9.0001 16.4996C9.0001 17.2996 8.3001 17.9996 7.5001 17.9996Z" />
    </Svg>
  );
};
