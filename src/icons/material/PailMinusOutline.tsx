import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PailMinusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.00011 6H3.00011V4H21.0001V6H20.0001L18.6001 13C17.8301 13.07 17.1101 13.26 16.4501 13.58L17.9601 6H6.04011L6.50011 8.22L4.65011 9.27L4.00011 6ZM12.8601 8C12.5801 7.5 11.9701 7.35 11.5001 7.63L3.27011 12.38C2.79011 12.66 2.62011 13.27 2.90011 13.75C3.18011 14.23 3.79011 14.39 4.27011 14.11L12.5001 9.36C12.9701 9.09 13.1401 8.47 12.8601 8ZM13.0001 19H8.64011L7.73011 14.43L5.90011 15.5L7.00011 21H13.3501C13.1301 20.37 13.0001 19.7 13.0001 19ZM15.0001 18V20H23.0001V18H15.0001Z" />
    </Svg>
  );
};
