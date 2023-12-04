import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiameterVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.15 21.4596L5.47 19.5796C3.35 17.7396 2 15.0296 2 11.9996C2 9.34748 3.05357 6.80394 4.92893 4.92858C6.8043 3.05322 9.34784 1.99965 12 1.99965C13.78 1.99965 15.44 2.45965 16.89 3.26965L18.21 1.38965L19.85 2.53965L18.53 4.41965C20.65 6.25965 22 8.96965 22 11.9996C22 14.6518 20.9464 17.1954 19.0711 19.0707C17.1957 20.9461 14.6522 21.9996 12 21.9996C10.22 21.9996 8.56 21.5396 7.11 20.7296L5.79 22.6096L4.15 21.4596ZM12 3.99965C9.87827 3.99965 7.84344 4.8425 6.34315 6.34279C4.84285 7.84309 4 9.87792 4 11.9996C4 14.3496 5 16.4596 6.63 17.9296L15.73 4.91965C14.62 4.32965 13.35 3.99965 12 3.99965ZM12 19.9996C14.1217 19.9996 16.1566 19.1568 17.6569 17.6565C19.1571 16.1562 20 14.1214 20 11.9996C20 9.64965 19 7.53965 17.37 6.06965L8.27 19.0796C9.38 19.6696 10.65 19.9996 12 19.9996Z" />
    </Svg>
  );
};
