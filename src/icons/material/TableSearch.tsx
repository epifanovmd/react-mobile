import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.3 17.89C20.62 15.79 20 13 17.89 11.68C15.79 10.36 13 11 11.68 13.09C10.36 15.2 11 18 13.09 19.3C14.56 20.22 16.42 20.22 17.89 19.3L21 22.39L22.39 21L19.3 17.89ZM17.3 17.27C16.32 18.25 14.74 18.24 13.76 17.27C12.79 16.29 12.79 14.71 13.77 13.73C14.74 12.76 16.32 12.76 17.3 13.73C18.26 14.72 18.25 16.3 17.27 17.27H17.3ZM19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H10.81C10.25 19.42 9.8 18.74 9.5 18H5V14H9.18C9.34 13.29 9.61 12.61 10 12H5V8H11V10.81C11.58 10.25 12.26 9.8 13 9.5V8H19V10C19.4 10.25 19.77 10.55 20.1 10.88C20.44 11.22 20.74 11.59 21 12V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4Z" />
    </Svg>
  );
};
