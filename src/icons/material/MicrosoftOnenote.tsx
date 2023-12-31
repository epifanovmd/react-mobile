import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftOnenoteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.17 3.25C21.39 3.25 21.5867 3.33333 21.76 3.5C21.92 3.66 22 3.85333 22 4.08V19.92C22 20.1467 21.92 20.34 21.76 20.5C21.5867 20.6667 21.39 20.75 21.17 20.75H7.83C7.61 20.75 7.41333 20.6667 7.24 20.5C7.08 20.34 7 20.1467 7 19.92V17H2.83C2.61 17 2.41333 16.92 2.24 16.76C2.08 16.5867 2 16.39 2 16.17V7.83C2 7.61 2.08 7.41333 2.24 7.24C2.41333 7.08 2.61 7 2.83 7H7V4.08C7 3.85333 7.08 3.66 7.24 3.5C7.41333 3.33333 7.61 3.25 7.83 3.25H21.17ZM5.8 11.17L8.16 15.27H9.65V8.73H8.2V12.92L5.93 8.73H4.35V15.27H5.8V11.17ZM20.75 19.5V17H18.25V19.5H20.75ZM20.75 15.75V13.25H18.25V15.75H20.75ZM20.75 12V9.5H18.25V12H20.75ZM20.75 8.25V4.5H8.25V7H11.17C11.39 7 11.5867 7.08 11.76 7.24C11.92 7.41333 12 7.61 12 7.83V16.17C12 16.39 11.92 16.5867 11.76 16.76C11.5867 16.92 11.39 17 11.17 17H8.25V19.5H17V8.25H20.75Z" />
    </Svg>
  );
};
