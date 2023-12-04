import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AndroidIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32C15.77 13.86 16.15 13.5 16.61 13.5C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15ZM7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15ZM16.91 10.14L18.58 7.25997C18.67 7.08997 18.61 6.87997 18.45 6.78997C18.28 6.68997 18.07 6.74997 18 6.91997L16.29 9.82997C14.95 9.21997 13.5 8.89997 12 8.90997C10.47 8.90997 9 9.23997 7.73 9.81997L6.04 6.90997C5.95 6.73997 5.74 6.67997 5.57 6.77997C5.4 6.86997 5.35 7.07997 5.44 7.24997L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14Z" />
    </Svg>
  );
};
