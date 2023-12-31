import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 2C5.14 2 2 5.14 2 9C2 14.25 9 22 9 22C9 22 16 14.25 16 9C16 7.14348 15.2625 5.36301 13.9497 4.05025C12.637 2.7375 10.8565 2 9 2ZM9 6.5C9.3283 6.5 9.65339 6.56466 9.95671 6.6903C10.26 6.81594 10.5356 7.00009 10.7678 7.23223C10.9999 7.46438 11.1841 7.73998 11.3097 8.04329C11.4353 8.34661 11.5 8.6717 11.5 9C11.5 9.3283 11.4353 9.65339 11.3097 9.95671C11.1841 10.26 10.9999 10.5356 10.7678 10.7678C10.5356 10.9999 10.26 11.1841 9.95671 11.3097C9.65339 11.4353 9.3283 11.5 9 11.5C8.33696 11.5 7.70107 11.2366 7.23223 10.7678C6.76339 10.2989 6.5 9.66304 6.5 9C6.5 8.33696 6.76339 7.70107 7.23223 7.23223C7.70107 6.76339 8.33696 6.5 9 6.5ZM16.58 14.16L15.17 15.58L17.58 18L15.17 20.41L16.58 21.82L19 19.41L21.41 21.82L22.83 20.41L20.41 18L22.83 15.58L21.41 14.16L19 16.58" />
    </Svg>
  );
};
