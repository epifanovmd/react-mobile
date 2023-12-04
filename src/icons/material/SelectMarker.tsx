import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectMarkerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 3H5V5H3V4C3 3.45 3.45 3 4 3ZM20 3C20.55 3 21 3.45 21 4V5H19V3H20ZM15 5V3H17V5H15ZM11 5V3H13V5H11ZM7 5V3H9V5H7ZM11 21V19H13V21H11ZM7 21V19H9V21H7ZM4 21C3.45 21 3 20.55 3 20V19H5V21H4ZM3 15H5V17H3V15ZM3 11H5V13H3V11ZM3 7H5V9H3V7ZM21 7V9H19V7H21ZM19.5 13C21.4 13 23 14.6 23 16.5C23 19.1 19.5 23 19.5 23C19.5 23 16 19.1 16 16.5C16 14.6 17.6 13 19.5 13ZM19.5 17.8C20.2 17.8 20.8 17.2 20.7 16.6C20.7 16 20.1 15.4 19.5 15.4C18.9 15.4 18.3 15.9 18.3 16.6C18.3 17.2 18.8 17.8 19.5 17.8Z" />
    </Svg>
  );
};
