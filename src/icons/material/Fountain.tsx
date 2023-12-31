import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FountainIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 2C4.47 2 2 4.46 2 7.5V8H4V7.5C4 6.57174 4.36875 5.6815 5.02513 5.02513C5.6815 4.36875 6.57174 4 7.5 4C9 4 10.26 4.93 10.76 6.24C10.37 6.08 9.95 6 9.5 6C8.11 6 6.9 6.82 6.34 8L8.08 9C8.29 8.42 8.85 8 9.5 8C9.89782 8 10.2794 8.15804 10.5607 8.43934C10.842 8.72064 11 9.10218 11 9.5V11H13V9.5C13 9.10218 13.158 8.72064 13.4393 8.43934C13.7206 8.15804 14.1022 8 14.5 8C15.16 8 15.71 8.42 15.92 9L17.66 8C17.1 6.82 15.9 6 14.5 6C14.05 6 13.63 6.08 13.24 6.24C13.74 4.93 15 4 16.5 4C17.4283 4 18.3185 4.36875 18.9749 5.02513C19.6313 5.6815 20 6.57174 20 7.5V8H22V7.5C22 6.04131 21.4205 4.64236 20.3891 3.61091C19.3576 2.57946 17.9587 2 16.5 2C14.64 2 13 2.93 12 4.34C11 2.93 9.36 2 7.5 2ZM6 12V14H7.42C7.92 15.15 8.85 16.07 10 16.57C10 17.38 10 18.19 10 19H2C2 19 2.82 20.23 3.41 21.11C3.78 21.67 4.4 22 5.07 22H18.93C19.6 22 20.22 21.67 20.59 21.11L22 19H14C14 18.19 14 17.38 14 16.57C15.15 16.07 16.08 15.15 16.58 14H18V12H6Z" />
    </Svg>
  );
};
