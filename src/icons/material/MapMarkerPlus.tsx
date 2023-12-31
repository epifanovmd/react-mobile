import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 11.5C9.3283 11.5 9.65339 11.4353 9.95671 11.3097C10.26 11.1841 10.5356 10.9999 10.7678 10.7678C10.9999 10.5356 11.1841 10.26 11.3097 9.95671C11.4353 9.65339 11.5 9.3283 11.5 9C11.5 8.6717 11.4353 8.34661 11.3097 8.04329C11.1841 7.73998 10.9999 7.46438 10.7678 7.23223C10.5356 7.00009 10.26 6.81594 9.95671 6.6903C9.65339 6.56466 9.3283 6.5 9 6.5C8.33696 6.5 7.70107 6.76339 7.23223 7.23223C6.76339 7.70107 6.5 8.33696 6.5 9C6.5 9.3283 6.56466 9.65339 6.6903 9.95671C6.81594 10.26 7.00009 10.5356 7.23223 10.7678C7.70107 11.2366 8.33696 11.5 9 11.5ZM9 2C12.86 2 16 5.13 16 9C16 14.25 9 22 9 22C9 22 2 14.25 2 9C2 7.14348 2.7375 5.36301 4.05025 4.05025C5.36301 2.7375 7.14348 2 9 2ZM15 17H18V14H20V17H23V19H20V22H18V19H15V17Z" />
    </Svg>
  );
};
