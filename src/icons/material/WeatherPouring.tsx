import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherPouringIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 12C9.53 12.14 9.85 12.69 9.71 13.22L8.41 18.05C8.27 18.59 7.72 18.9 7.19 18.76C6.65 18.62 6.34 18.07 6.5 17.54L7.78 12.71C7.92 12.17 8.47 11.86 9 12ZM13 12C13.53 12.14 13.85 12.69 13.71 13.22L11.64 20.95C11.5 21.5 10.95 21.8 10.41 21.66C9.88 21.5 9.56 20.97 9.7 20.43L11.78 12.71C11.92 12.17 12.47 11.86 13 12ZM17 12C17.53 12.14 17.85 12.69 17.71 13.22L16.41 18.05C16.27 18.59 15.72 18.9 15.19 18.76C14.65 18.62 14.34 18.07 14.5 17.54L15.78 12.71C15.92 12.17 16.47 11.86 17 12ZM17 10V9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8C5.20435 8 4.44129 8.31607 3.87868 8.87868C3.31607 9.44129 3 10.2044 3 11C3 12.11 3.6 13.08 4.5 13.6V13.59C5 13.87 5.14 14.5 4.87 14.96C4.59 15.43 4 15.6 3.5 15.32V15.33C2 14.47 1 12.85 1 11C1 9.67392 1.52678 8.40215 2.46447 7.46447C3.40215 6.52678 4.67392 6 6 6C7 3.65 9.3 2 12 2C15.43 2 18.24 4.66 18.5 8.03L19 8C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.5 22.2 14.77 21 15.46C20.5 15.73 19.91 15.57 19.63 15.09C19.36 14.61 19.5 14 20 13.72V13.73C20.6 13.39 21 12.74 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10H17Z" />
    </Svg>
  );
};
