import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VoteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 12.9993H17.32L15.32 14.9993H17.23L19 16.9993H5L6.78 14.9993H8.83L6.83 12.9993H6L3 15.9993V19.9993C3 20.5297 3.21071 21.0385 3.58579 21.4135C3.96086 21.7886 4.46957 21.9993 5 21.9993H19C19.5304 21.9993 20.0391 21.7886 20.4142 21.4135C20.7893 21.0385 21 20.5297 21 19.9993V15.9993L18 12.9993ZM17 7.94931L12.05 12.8993L8.5 9.35931L13.46 4.40931L17 7.94931ZM12.76 2.28931L6.39 8.65931C6 9.04931 6 9.67931 6.39 10.0693L11.34 14.9993C11.73 15.4093 12.36 15.4093 12.75 14.9993L19.11 8.65931C19.5 8.26931 19.5 7.63931 19.11 7.24931L14.16 2.29931C13.78 1.89931 13.15 1.89931 12.76 2.28931Z" />
    </Svg>
  );
};
