import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProfessionalHexagonIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5ZM5 9V15H6.25V13H7C7.53043 13 8.03914 12.7893 8.41421 12.4142C8.78929 12.0391 9 11.5304 9 11C9 10.4696 8.78929 9.96086 8.41421 9.58579C8.03914 9.21071 7.53043 9 7 9H5ZM6.25 12V10H6.75C7.01522 10 7.26957 10.1054 7.45711 10.2929C7.64464 10.4804 7.75 10.7348 7.75 11C7.75 11.2652 7.64464 11.5196 7.45711 11.7071C7.26957 11.8946 7.01522 12 6.75 12H6.25ZM9.75 9V15H11V13H11.75L12.41 15H13.73L12.94 12.61C13.43 12.25 13.75 11.66 13.75 11C13.75 10.4696 13.5393 9.96086 13.1642 9.58579C12.7891 9.21071 12.2804 9 11.75 9H9.75ZM11 12V10H11.5C11.7652 10 12.0196 10.1054 12.2071 10.2929C12.3946 10.4804 12.5 10.7348 12.5 11C12.5 11.2652 12.3946 11.5196 12.2071 11.7071C12.0196 11.8946 11.7652 12 11.5 12H11ZM17 9C15.62 9 14.5 10.34 14.5 12C14.5 13.66 15.62 15 17 15C18.38 15 19.5 13.66 19.5 12C19.5 10.34 18.38 9 17 9ZM17 10.25C17.76 10.25 18.38 11.03 18.38 12C18.38 12.97 17.76 13.75 17 13.75C16.24 13.75 15.63 12.97 15.63 12C15.63 11.03 16.24 10.25 17 10.25Z" />
    </Svg>
  );
};
