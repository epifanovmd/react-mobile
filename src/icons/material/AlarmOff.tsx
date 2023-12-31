import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.9999 3.27999L6.5999 1.85999L5.7399 2.56999L7.1599 3.99999L7.9999 3.27999ZM16.4699 18.39C15.2599 19.39 13.6999 20 11.9999 20C10.1434 20 8.36291 19.2625 7.05015 17.9497C5.7374 16.637 4.9999 14.8565 4.9999 13C4.9999 11.3 5.6099 9.73998 6.6099 8.52998L16.4699 18.39ZM2.9199 2.28999L1.6499 3.56999L2.9999 4.89999L1.8699 5.82999L3.2899 7.24999L4.3999 6.30999L5.1999 7.10999C3.8299 8.68999 2.9999 10.75 2.9999 13C2.9999 15.3869 3.94811 17.6761 5.63594 19.3639C7.32377 21.0518 9.61295 22 11.9999 22C14.2499 22 16.3099 21.17 17.8899 19.8L20.0899 22L21.3599 20.73L3.8899 3.26999L2.9199 2.28999ZM21.9999 5.71999L17.3999 1.85999L16.1099 3.38999L20.7099 7.24999L21.9999 5.71999ZM11.9999 5.99999C13.8564 5.99999 15.6369 6.73748 16.9496 8.05024C18.2624 9.36299 18.9999 11.1435 18.9999 13C18.9999 13.84 18.8399 14.65 18.5699 15.4L20.0899 16.92C20.6699 15.73 20.9999 14.41 20.9999 13C20.9999 10.613 20.0517 8.32385 18.3639 6.63602C16.676 4.9482 14.3869 3.99999 11.9999 3.99999C10.5899 3.99999 9.2699 4.32999 8.0799 4.90999L9.5999 6.42999C10.3499 6.15999 11.1599 5.99999 11.9999 5.99999Z" />
    </Svg>
  );
};
