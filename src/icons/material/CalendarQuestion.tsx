import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarQuestionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 1V3H5C3.89 3 3 3.9 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1H16V3H8V1H6ZM5 8H19V19H5V8ZM12.19 9C11.32 9 10.62 9.2 10.08 9.59C9.56 10 9.3 10.57 9.31 11.36L9.32 11.39H11.25C11.26 11.09 11.35 10.86 11.53 10.7C11.71 10.55 11.93 10.47 12.19 10.47C12.5 10.47 12.76 10.57 12.94 10.75C13.12 10.94 13.2 11.2 13.2 11.5C13.2 11.82 13.13 12.09 12.97 12.32C12.83 12.55 12.62 12.75 12.36 12.91C11.85 13.25 11.5 13.55 11.31 13.82C11.11 14.08 11 14.5 11 15H13C13 14.69 13.04 14.44 13.13 14.26C13.22 14.08 13.39 13.9 13.64 13.74C14.09 13.5 14.46 13.21 14.75 12.81C15.04 12.41 15.19 12 15.19 11.5C15.19 10.74 14.92 10.13 14.38 9.68C13.85 9.23 13.12 9 12.19 9ZM11 16V18H13V16H11Z" />
    </Svg>
  );
};
