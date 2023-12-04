import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountRemoveOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.45996 8.88L2.87996 7.46L4.99996 9.59L7.11996 7.46L8.53996 8.88L6.40996 11L8.53996 13.12L7.11996 14.54L4.99996 12.41L2.87996 14.54L1.45996 13.12L3.58996 11L1.45996 8.88ZM15 4C16.0608 4 17.0782 4.42143 17.8284 5.17157C18.5785 5.92172 19 6.93913 19 8C19 9.06087 18.5785 10.0783 17.8284 10.8284C17.0782 11.5786 16.0608 12 15 12C13.9391 12 12.9217 11.5786 12.1715 10.8284C11.4214 10.0783 11 9.06087 11 8C11 6.93913 11.4214 5.92172 12.1715 5.17157C12.9217 4.42143 13.9391 4 15 4ZM15 5.9C14.443 5.9 13.9089 6.12125 13.515 6.51508C13.1212 6.9089 12.9 7.44305 12.9 8C12.9 8.55695 13.1212 9.0911 13.515 9.48492C13.9089 9.87875 14.443 10.1 15 10.1C16.16 10.1 17.1 9.16 17.1 8C17.1 6.84 16.16 5.9 15 5.9ZM15 13C17.67 13 23 14.33 23 17V20H6.99996V17C6.99996 14.33 12.33 13 15 13ZM15 14.9C12 14.9 8.89996 16.36 8.89996 17V18.1H21.1V17C21.1 16.36 17.97 14.9 15 14.9Z" />
    </Svg>
  );
};
