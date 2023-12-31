import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GraphqlIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 5.37L11.56 5.31L5.99995 14.9C6.23995 15.11 6.39995 15.38 6.46995 15.68H17.53C17.6 15.38 17.76 15.11 18 14.9L12.44 5.31L12 5.37ZM6.59995 16.53L10.88 19.06C11.17 18.79 11.57 18.63 12 18.63C12.43 18.63 12.83 18.79 13.12 19.06L17.4 16.53H6.59995ZM12 22C11.5544 22 11.1271 21.823 10.812 21.5079C10.497 21.1929 10.32 20.7656 10.32 20.32L10.41 19.76L6.10995 17.21C5.79995 17.57 5.34995 17.79 4.83995 17.79C4.39439 17.79 3.96707 17.613 3.65201 17.2979C3.33695 16.9829 3.15995 16.5556 3.15995 16.11C3.15995 15.32 3.68995 14.66 4.41995 14.47V9.36C3.58995 9.25 2.94995 8.54 2.94995 7.68C2.94995 7.23444 3.12695 6.80712 3.44201 6.49206C3.75707 6.177 4.18439 6 4.62995 6C5.17995 6 5.65995 6.26 5.96995 6.66L10.38 4.13L10.32 3.68C10.32 2.75 11.07 2 12 2C12.93 2 13.68 2.75 13.68 3.68L13.62 4.13L18.03 6.66C18.34 6.26 18.82 6 19.37 6C19.8155 6 20.2428 6.177 20.5579 6.49206C20.873 6.80712 21.0499 7.23444 21.0499 7.68C21.0499 8.54 20.41 9.25 19.58 9.36V14.47C20.3099 14.66 20.84 15.32 20.84 16.11C20.84 16.5556 20.663 16.9829 20.3479 17.2979C20.0328 17.613 19.6055 17.79 19.16 17.79C18.65 17.79 18.2 17.57 17.89 17.21L13.59 19.76L13.68 20.32C13.68 20.7656 13.503 21.1929 13.1879 21.5079C12.8728 21.823 12.4455 22 12 22ZM10.8 4.86L6.29995 7.44L6.31995 7.68C6.31995 8.39 5.87995 9 5.25995 9.25L5.28995 14.5L10.8 4.86ZM13.2 4.86L18.71 14.5L18.74 9.25C18.12 9 17.68 8.39 17.68 7.68L17.7 7.44L13.2 4.86Z" />
    </Svg>
  );
};
