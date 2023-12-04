import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CommentQuestionOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H8V21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22H9.5C9.75 22 10 21.9 10.2 21.71L13.9 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V4C22 2.89 21.1 2 20 2H4ZM4 4H20V16H13.08L10 19.08V16H4V4ZM12.19 5.5C11.3 5.5 10.59 5.68 10.05 6.04C9.5 6.4 9.22 7 9.27 7.69C0.21 7.69 6.57 7.69 11.24 7.69C11.24 7.41 11.34 7.2 11.5 7.06C11.7 6.92 11.92 6.85 12.19 6.85C12.5 6.85 12.77 6.93 12.95 7.11C13.13 7.28 13.22 7.5 13.22 7.8C13.22 8.08 13.14 8.33 13 8.54C12.83 8.76 12.62 8.94 12.36 9.08C11.84 9.4 11.5 9.68 11.29 9.92C11.1 10.16 11 10.5 11 11H13C13 10.72 13.05 10.5 13.14 10.32C13.23 10.15 13.4 10 13.66 9.85C14.12 9.64 14.5 9.36 14.79 9C15.08 8.63 15.23 8.24 15.23 7.8C15.23 7.1 14.96 6.54 14.42 6.12C13.88 5.71 13.13 5.5 12.19 5.5ZM11 12V14H13V12H11Z" />
    </Svg>
  );
};
