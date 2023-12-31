import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CraneIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 6V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H9V3H6V4H5V6H6V15H5V13H3V15H2V17H3V21H5V17H10V21H12V19.92V17H13V15H12V13H10V15H9V6H17V10.62C16.53 10.79 16.19 11.23 16.19 11.76C16.19 12.2 16.43 12.6 16.8 12.82V14H17.42C17.76 14 18.03 14.28 18.03 14.62C18.03 14.96 17.76 15.24 17.42 15.24C17.2 15.24 17 15.12 16.89 14.93C16.71 14.64 16.34 14.54 16.05 14.71C15.75 14.87 15.65 15.25 15.82 15.55C16.15 16.11 16.76 16.47 17.42 16.47C18.43 16.47 19.26 15.64 19.26 14.62C19.26 13.84 18.76 13.14 18.03 12.88V12.82C18.41 12.6 18.65 12.2 18.65 11.76C18.65 11.3 18.38 10.91 18 10.7V6H20ZM8 13.66L7 14.66V13.24L8 12.24V13.66ZM8 10.71L7 11.71V10.29L8 9.29V10.71ZM7 8.71V7.29L8 6.29V7.71L7 8.71Z" />
    </Svg>
  );
};
