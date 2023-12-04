import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ApacheKafkaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.54 12.97C14.86 12.97 14.24 13.22 13.76 13.64L12.47 12.89C12.56 12.6 12.6 12.29 12.6 11.97C12.6 11.65 12.56 11.34 12.5 11.05L13.73 10.32C14.21 10.76 14.85 11 15.54 11C17.03 11 18.24 9.81 18.24 8.32C18.24 6.83 17.03 5.63 15.54 5.63C14.05 5.63 12.84 6.84 12.84 8.33C12.84 8.5 12.86 8.7 12.89 8.88L11.64 9.6C11.21 9.15 10.64 8.82 10 8.65V7.26C11.09 6.91 11.88 5.89 11.88 4.69C11.88 3.2 10.67 2 9.18001 2C7.69001 2 6.50001 3.2 6.50001 4.69C6.50001 5.89 7.26001 6.9 8.34001 7.26V8.66C6.86001 9.04 5.76001 10.37 5.76001 11.97C5.76001 13.57 6.86001 14.91 8.34001 15.28V16.73C7.26001 17.09 6.50001 18.1 6.50001 19.3C6.50001 20.79 7.69001 22 9.18001 22C10.67 22 11.88 20.79 11.88 19.3C11.88 18.1 11.09 17.08 10 16.73V15.29C10.64 15.13 11.2 14.8 11.64 14.35L12.9 15.08C12.86 15.27 12.84 15.46 12.84 15.66C12.84 17.15 14.05 18.36 15.54 18.36C17.03 18.36 18.24 17.15 18.24 15.66C18.24 14.17 17.03 12.97 15.54 12.97ZM15.54 7C16.28 7 16.87 7.59 16.87 8.32C16.87 9.05 16.28 9.66 15.54 9.66C14.8 9.66 14.21 9.06 14.21 8.32C14.21 7.58 14.8 7 15.54 7ZM7.85001 4.69C7.85001 3.95 8.44001 3.35 9.18001 3.35C9.92001 3.35 10.5 3.95 10.5 4.69C10.5 5.43 9.92001 6.03 9.18001 6.03C8.44001 6.03 7.85001 5.43 7.85001 4.69ZM10.5 19.3C10.5 20.04 9.92001 20.64 9.18001 20.64C8.44001 20.64 7.85001 20.04 7.85001 19.3C7.85001 18.56 8.44001 17.96 9.18001 17.96C9.92001 17.96 10.5 18.56 10.5 19.3ZM9.18001 13.89C8.12001 13.89 7.26001 13.03 7.26001 11.97C7.26001 10.91 8.12001 10.05 9.18001 10.05C10.24 10.05 11.1 10.91 11.1 11.97C11.1 13.03 10.24 13.89 9.18001 13.89ZM15.54 17C14.8 17 14.21 16.4 14.21 15.66C14.21 14.92 14.8 14.33 15.54 14.33C16.28 14.33 16.87 14.93 16.87 15.66C16.87 16.39 16.28 17 15.54 17Z" />
    </Svg>
  );
};
