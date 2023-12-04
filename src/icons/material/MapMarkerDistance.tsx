import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerDistanceIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.5 8.11C5.61 8.11 4.89 7.39 4.89 6.5C4.89 6.073 5.05962 5.66349 5.36156 5.36156C5.66349 5.05962 6.073 4.89 6.5 4.89C7.39 4.89 8.11 5.61 8.11 6.5C8.11 6.927 7.94038 7.33651 7.63844 7.63844C7.33651 7.94038 6.927 8.11 6.5 8.11ZM6.5 2C4 2 2 4 2 6.5C2 9.87 6.5 14.86 6.5 14.86C6.5 14.86 11 9.87 11 6.5C11 4 9 2 6.5 2ZM17.5 8.11C17.073 8.11 16.6635 7.94038 16.3616 7.63844C16.0596 7.33651 15.89 6.927 15.89 6.5C15.89 5.61 16.61 4.89 17.5 4.89C18.39 4.89 19.11 5.61 19.11 6.5C19.11 6.927 18.9404 7.33651 18.6384 7.63844C18.3365 7.94038 17.927 8.11 17.5 8.11ZM17.5 2C15 2 13 4 13 6.5C13 9.87 17.5 14.86 17.5 14.86C17.5 14.86 22 9.87 22 6.5C22 4 20 2 17.5 2ZM17.5 16C16.23 16 15.1 16.8 14.68 18H9.32C8.77 16.44 7.05 15.62 5.5 16.17C3.93 16.72 3.11 18.44 3.66 20C4.22 21.56 5.93 22.38 7.5 21.83C8.35 21.53 9 20.85 9.32 20H14.69C15.24 21.56 16.96 22.38 18.5 21.83C20.08 21.28 20.9 19.56 20.35 18C19.92 16.8 18.78 16 17.5 16ZM17.5 20.5C17.1022 20.5 16.7206 20.342 16.4393 20.0607C16.158 19.7794 16 19.3978 16 19C16 18.6022 16.158 18.2206 16.4393 17.9393C16.7206 17.658 17.1022 17.5 17.5 17.5C17.8978 17.5 18.2794 17.658 18.5607 17.9393C18.842 18.2206 19 18.6022 19 19C19 19.3978 18.842 19.7794 18.5607 20.0607C18.2794 20.342 17.8978 20.5 17.5 20.5Z" />
    </Svg>
  );
};
