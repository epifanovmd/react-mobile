import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeartPulseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 4C6.04131 4 4.64236 4.57946 3.61091 5.61091C2.57946 6.64236 2 8.04131 2 9.5C2 10 2.09 10.5 2.22 11H6.3L7.57 7.63C7.87 6.83 9.05 6.75 9.43 7.63L11.5 13L12.09 11.58C12.22 11.25 12.57 11 13 11H21.78C21.91 10.5 22 10 22 9.5C22 8.04131 21.4205 6.64236 20.3891 5.61091C19.3576 4.57946 17.9587 4 16.5 4C14.64 4 13 4.93 12 6.34C11 4.93 9.36 4 7.5 4ZM3 12.5C2.73478 12.5 2.48043 12.6054 2.29289 12.7929C2.10536 12.9804 2 13.2348 2 13.5C2 13.7652 2.10536 14.0196 2.29289 14.2071C2.48043 14.3946 2.73478 14.5 3 14.5H5.44L11 20C12 20.9 12 20.9 13 20L18.56 14.5H21C21.2652 14.5 21.5196 14.3946 21.7071 14.2071C21.8946 14.0196 22 13.7652 22 13.5C22 13.2348 21.8946 12.9804 21.7071 12.7929C21.5196 12.6054 21.2652 12.5 21 12.5H13.4L12.47 14.8C12.07 15.81 10.92 15.67 10.55 14.83L8.5 9.5L7.54 11.83C7.39 12.21 7.05 12.5 6.6 12.5H3Z" />
    </Svg>
  );
};
