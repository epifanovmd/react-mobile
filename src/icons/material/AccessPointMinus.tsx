import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccessPointMinusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 12C16 10.89 15.55 9.89 14.83 9.17L16.24 7.76C17.33 8.85 18 10.35 18 12C17.28 12 16.6 12.13 15.96 12.36C15.97 12.24 16 12.12 16 12ZM20 12.34C20.68 12.59 21.33 12.96 21.88 13.43C21.95 12.96 22 12.5 22 12C22 9.24 20.88 6.74 19.07 4.93L17.66 6.34C19.11 7.78 20 9.79 20 12C20 12.12 20 12.23 20 12.34ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM7.76 7.76C6.67 8.85 6 10.35 6 12C6 13.65 6.67 15.15 7.76 16.24L9.17 14.83C8.45 14.11 8 13.11 8 12C8 10.89 8.45 9.89 9.17 9.17L7.76 7.76ZM6.34 6.34L4.93 4.93C3.12 6.74 2 9.24 2 12C2 14.76 3.12 17.26 4.93 19.07L6.34 17.66C4.89 16.22 4 14.22 4 12C4 9.79 4.89 7.78 6.34 6.34ZM14 19H22V17H14V19Z" />
    </Svg>
  );
};
