import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountMinusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 4C13.9391 4 12.9217 4.42143 12.1716 5.17157C11.4214 5.92172 11 6.93913 11 8C11 9.06087 11.4214 10.0783 12.1716 10.8284C12.9217 11.5786 13.9391 12 15 12C16.0609 12 17.0783 11.5786 17.8284 10.8284C18.5786 10.0783 19 9.06087 19 8C19 6.93913 18.5786 5.92172 17.8284 5.17157C17.0783 4.42143 16.0609 4 15 4ZM15 5.9C16.16 5.9 17.1 6.84 17.1 8C17.1 9.16 16.16 10.1 15 10.1C14.443 10.1 13.9089 9.87875 13.5151 9.48492C13.1212 9.0911 12.9 8.55695 12.9 8C12.9 7.44305 13.1212 6.9089 13.5151 6.51508C13.9089 6.12125 14.443 5.9 15 5.9ZM1 10V12H9V10H1ZM15 13C12.33 13 7 14.33 7 17V20H23V17C23 14.33 17.67 13 15 13ZM15 14.9C17.97 14.9 21.1 16.36 21.1 17V18.1H8.9V17C8.9 16.36 12 14.9 15 14.9Z" />
    </Svg>
  );
};
