import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AllInclusiveBoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.1 3 19 3ZM16.1 15.9C15.07 15.9 14.09 15.5 13.35 14.76L12.71 14.12L14.13 12.71L14.76 13.34C15.12 13.7 15.6 13.9 16.11 13.9C17.15 13.9 18 13.05 18 12C18 10.95 17.15 10.1 16.1 10.1C15.6 10.1 15.12 10.3 14.76 10.66L10.65 14.76C9.91 15.5 8.94 15.9 7.9 15.9C5.75 15.9 4 14.15 4 12C4 9.85 5.75 8.1 7.9 8.1C8.94 8.1 9.91 8.5 10.65 9.24L11.29 9.88L9.87 11.3L9.24 10.66C8.88 10.3 8.4 10.1 7.9 10.1C6.85 10.1 6 10.95 6 12C6 13.05 6.85 13.9 7.9 13.9C8.4 13.9 8.88 13.7 9.24 13.34L13.35 9.24C14.09 8.5 15.06 8.1 16.1 8.1C18.25 8.1 20 9.85 20 12C20 14.15 18.25 15.9 16.1 15.9Z" />
    </Svg>
  );
};
