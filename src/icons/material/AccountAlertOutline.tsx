import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountAlertOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 12V7H22V13H20V12ZM20 17H22V15H20V17ZM10 13C12.67 13 18 14.34 18 17V20H2V17C2 14.34 7.33 13 10 13ZM10 4C11.0609 4 12.0783 4.42143 12.8284 5.17157C13.5786 5.92172 14 6.93913 14 8C14 9.06087 13.5786 10.0783 12.8284 10.8284C12.0783 11.5786 11.0609 12 10 12C8.93913 12 7.92172 11.5786 7.17157 10.8284C6.42143 10.0783 6 9.06087 6 8C6 6.93913 6.42143 5.92172 7.17157 5.17157C7.92172 4.42143 8.93913 4 10 4ZM10 14.9C7.03 14.9 3.9 16.36 3.9 17V18.1H16.1V17C16.1 16.36 12.97 14.9 10 14.9ZM10 5.9C9.44305 5.9 8.9089 6.12125 8.51508 6.51508C8.12125 6.9089 7.9 7.44305 7.9 8C7.9 8.55695 8.12125 9.0911 8.51508 9.48492C8.9089 9.87875 9.44305 10.1 10 10.1C10.557 10.1 11.0911 9.87875 11.4849 9.48492C11.8788 9.0911 12.1 8.55695 12.1 8C12.1 7.44305 11.8788 6.9089 11.4849 6.51508C11.0911 6.12125 10.557 5.9 10 5.9Z" />
    </Svg>
  );
};
