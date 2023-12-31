import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LinkBoxVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM13.94 14.81L11.73 17C11.08 17.67 10.22 18 9.36 18C8.5 18 7.64 17.67 7 17C5.67 15.71 5.67 13.58 7 12.26L8.35 10.9L8.34 11.5C8.33 12 8.41 12.5 8.57 12.94L8.62 13.09L8.22 13.5C7.91 13.8 7.74 14.21 7.74 14.64C7.74 15.07 7.91 15.47 8.22 15.78C8.83 16.4 9.89 16.4 10.5 15.78L12.7 13.59C13 13.28 13.18 12.87 13.18 12.44C13.18 12 13 11.61 12.7 11.3C12.53 11.14 12.44 10.92 12.44 10.68C12.44 10.45 12.53 10.23 12.7 10.06C13.03 9.73 13.61 9.74 13.94 10.06C14.57 10.7 14.92 11.54 14.92 12.44C14.92 13.34 14.57 14.18 13.94 14.81ZM17 11.74L15.66 13.1V12.5C15.67 12 15.59 11.5 15.43 11.06L15.38 10.92L15.78 10.5C16.09 10.2 16.26 9.79 16.26 9.36C16.26 8.93 16.09 8.53 15.78 8.22C15.17 7.6 14.1 7.61 13.5 8.22L11.3 10.42C11 10.72 10.82 11.13 10.82 11.56C10.82 12 11 12.39 11.3 12.7C11.47 12.86 11.56 13.08 11.56 13.32C11.56 13.56 11.47 13.78 11.3 13.94C11.13 14.11 10.91 14.19 10.68 14.19C10.46 14.19 10.23 14.11 10.06 13.94C8.75 12.63 8.75 10.5 10.06 9.19L12.27 7C13.58 5.67 15.71 5.68 17 7C17.65 7.62 18 8.46 18 9.36C18 10.26 17.65 11.1 17 11.74Z" />
    </Svg>
  );
};
