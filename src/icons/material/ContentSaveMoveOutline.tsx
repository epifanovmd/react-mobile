import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentSaveMoveOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 17H17V14L22 18.5L17 23V20H13V17ZM14 12.8C13.5 12.31 12.78 12 12 12C10.34 12 9 13.34 9 15C9 16.31 9.84 17.41 11 17.82C11.07 15.67 12.27 13.8 14 12.8ZM11.09 19H5V5H16.17L19 7.83V12.35C19.75 12.61 20.42 13 21 13.54V7L17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H11.81C11.46 20.39 11.21 19.72 11.09 19ZM6 10H15V6H6V10Z" />
    </Svg>
  );
};
