import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IncognitoCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM14.92 12.81C13.84 12.81 12.95 13.56 12.71 14.56C12.17 14.33 11.66 14.39 11.29 14.55C11.05 13.55 10.15 12.81 9.08 12.81C7.83 12.81 6.82 13.82 6.82 15.07C6.82 16.32 7.83 17.33 9.08 17.33C10.28 17.33 11.24 16.42 11.33 15.25C11.53 15.12 12.04 14.86 12.67 15.26C12.77 16.42 13.73 17.33 14.92 17.33C16.17 17.33 17.18 16.32 17.18 15.07C17.18 13.82 16.17 12.81 14.92 12.81ZM9.08 13.45C10 13.45 10.7 14.18 10.7 15.07C10.7 15.96 10 16.69 9.08 16.69C8.19 16.69 7.46 15.96 7.46 15.07C7.46 14.18 8.19 13.45 9.08 13.45ZM14.92 13.45C15.81 13.45 16.54 14.18 16.54 15.07C16.54 15.96 15.81 16.69 14.92 16.69C14 16.69 13.3 15.96 13.3 15.07C13.3 14.18 14 13.45 14.92 13.45ZM17.83 11.5H6.17V12.17H17.83V11.5ZM14.15 6.89C14 6.59 13.67 6.43 13.35 6.53L12 7L10.65 6.53L10.61 6.5C10.29 6.43 9.95 6.61 9.84 6.92L8.36 10.83H15.64L14.16 6.92L14.15 6.89Z" />
    </Svg>
  );
};
