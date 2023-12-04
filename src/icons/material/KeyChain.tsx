import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyChainIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.67 13.67C12.2 14.13 11.63 14.5 11 14.73V23H8V21H5V18H8V14.72C6.26 14.1 5 12.46 5 10.5C5 8 7 6 9.5 6C9.54 6 9.57 6 9.6 6C9.13 6.95 8.92 8 9.03 9.08C8.44 9.28 8 9.84 8 10.5C8 11.33 8.67 12 9.5 12C9.73 12 9.95 11.94 10.15 11.85C10.79 12.69 11.67 13.32 12.67 13.67ZM20.73 19.44L17.97 20.6L17.19 18.76L14.43 19.93L13.26 17.16L16.03 16L14.76 13C12.91 13.08 11.11 12.05 10.35 10.25C9.39 7.96 10.47 5.32 12.76 4.35C13 4.25 13.26 4.18 13.5 4.12C12.84 2.87 11.5 2 10 2C7.79 2 6 3.79 6 6C6 6.08 6 6.16 6 6.24C5.7 6.5 5.4 6.82 5.15 7.15C5.06 6.78 5 6.4 5 6C5 3.24 7.24 1 10 1C12.76 1 15 3.24 15 6C15 7.42 14.4 8.67 13.45 9.57C13.87 10 14.5 10.13 15.08 9.88C15.85 9.56 16.2 8.68 15.88 7.92C15.85 7.83 15.8 7.74 15.74 7.66C15.9 7.13 16 6.58 16 6C16 5.37 15.9 4.76 15.72 4.19C17 4.55 18.1 5.44 18.65 6.76C19.41 8.56 18.89 10.57 17.5 11.81L20.73 19.44ZM13 8.6C13.37 8.19 13.65 7.71 13.82 7.18C13.28 7.45 12.97 8 13 8.6Z" />
    </Svg>
  );
};
