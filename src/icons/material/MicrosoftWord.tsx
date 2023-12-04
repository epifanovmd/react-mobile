import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftWordIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.17 3.25C21.39 3.25 21.5867 3.33333 21.76 3.5C21.92 3.66 22 3.85333 22 4.08V19.92C22 20.1467 21.92 20.34 21.76 20.5C21.5867 20.6667 21.39 20.75 21.17 20.75H7.83C7.61 20.75 7.41333 20.6667 7.24 20.5C7.08 20.34 7 20.1467 7 19.92V17H2.83C2.61 17 2.41333 16.92 2.24 16.76C2.08 16.5867 2 16.39 2 16.17V7.83C2 7.61 2.08 7.41333 2.24 7.24C2.41333 7.08 2.61 7 2.83 7H7V4.08C7 3.85333 7.08 3.66 7.24 3.5C7.41333 3.33333 7.61 3.25 7.83 3.25H21.17ZM7.03 11.34L8.23 15.28H9.6L10.91 8.72H9.53L8.75 12.6L7.64 8.85H6.5L5.31 12.62L4.53 8.72H3.09L4.4 15.28H5.77L7.03 11.34ZM20.75 19.5V17H8.25V19.5H20.75ZM20.75 15.75V12.63H12V15.75H20.75ZM20.75 11.38V8.25H12V11.38H20.75ZM20.75 7V4.5H8.25V7H20.75Z" />
    </Svg>
  );
};
