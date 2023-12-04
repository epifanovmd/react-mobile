import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileImageMarkerOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.5 12C7.67 12 7 11.33 7 10.5C7 9.67 7.67 9 8.5 9C9.33 9 10 9.67 10 10.5C10 11.33 9.33 12 8.5 12ZM14 19C13.43 17.86 13 16.64 13 15.5C13 15.34 13 15.18 13.03 15.03L12 14L7 19H14ZM6 20V4H13V9H18V10.03C18.17 10 18.33 10 18.5 10C19 10 19.5 10.08 20 10.22V8L14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H15.91C15.5 21.44 15 20.76 14.55 20H6ZM22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12C20.4 12 22 13.6 22 15.5ZM19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6Z" />
    </Svg>
  );
};
