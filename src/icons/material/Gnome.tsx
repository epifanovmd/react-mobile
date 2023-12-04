import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GnomeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.42 2C14.26 2 13.5 7.93 15.82 7.93C18.16 7.93 22.58 2 18.42 2ZM12 2.73C11.92 2.73 11.85 2.73 11.78 2.74C9.44001 3.04 10.26 7.12 11.5 7.19C12.72 7.27 14.04 2.73 12 2.73ZM7.93001 4.34C7.81001 4.34 7.67001 4.37 7.53001 4.43C5.65001 5.21 7.24001 8.41 8.30001 8.2C9.27001 8 9.39001 4.3 7.93001 4.34ZM4.93001 6.85C4.77001 6.84 4.59001 6.9 4.41001 7.03C2.90001 8.07 4.91001 10.58 5.80001 10.19C6.57001 9.85 6.08001 6.89 4.93001 6.85ZM13.29 8.77C10.1 8.8 6.03001 10.42 5.32001 13.59C4.53001 17.11 8.56001 22 12.76 22C14.83 22 17.21 20.13 17.66 17.77C18 15.97 13.65 16.69 13.81 17.88C14 19.31 12.76 20 11.55 19.1C7.69001 16.16 17.93 14.7 17.25 10.69C17.03 9.39 15.34 8.76 13.29 8.77Z" />
    </Svg>
  );
};
