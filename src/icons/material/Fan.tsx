import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FanIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.5 2C17 2 17.11 5.57 14.75 6.75C13.76 7.24 13.32 8.29 13.13 9.22C13.61 9.42 14.03 9.73 14.35 10.13C18.05 8.13 22.03 8.92 22.03 12.5C22.03 17 18.46 17.1 17.28 14.73C16.78 13.74 15.72 13.3 14.79 13.11C14.59 13.59 14.28 14 13.88 14.34C15.87 18.03 15.08 22 11.5 22C7 22 6.91 18.42 9.27 17.24C10.25 16.75 10.69 15.71 10.89 14.79C10.4 14.59 9.97 14.27 9.65 13.87C5.96 15.85 2 15.07 2 11.5C2 7 5.56 6.89 6.74 9.26C7.24 10.25 8.29 10.68 9.22 10.87C9.41 10.39 9.73 9.97 10.14 9.65C8.15 5.96 8.94 2 12.5 2Z" />
    </Svg>
  );
};
