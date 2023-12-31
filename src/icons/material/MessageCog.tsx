import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MessageCogIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.5 10C13.5 10.3978 13.342 10.7794 13.0607 11.0607C12.7794 11.342 12.3978 11.5 12 11.5C11.16 11.5 10.5 10.83 10.5 10C10.5 9.60218 10.658 9.22064 10.9393 8.93934C11.2206 8.65804 11.6022 8.5 12 8.5C12.3978 8.5 12.7794 8.65804 13.0607 8.93934C13.342 9.22064 13.5 9.60218 13.5 10ZM22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H6L2 22V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4ZM16.77 11.32L15.7 10.5C15.71 10.33 15.71 10.16 15.7 10C15.72 9.84 15.72 9.67 15.7 9.5L16.76 8.68C16.85 8.6 16.88 8.47 16.82 8.36L15.82 6.63C15.76 6.5 15.63 6.47 15.5 6.5L14.27 7C14 6.8 13.73 6.63 13.42 6.5L13.23 5.19C13.21 5.08 13.11 5 13 5H11C10.88 5 10.77 5.09 10.75 5.21L10.56 6.53C10.26 6.65 9.97 6.81 9.7 7L8.46 6.5C8.34 6.46 8.21 6.5 8.15 6.61L7.15 8.34C7.09 8.45 7.11 8.58 7.21 8.66L8.27 9.5C8.23 9.82 8.23 10.16 8.27 10.5L7.21 11.32C7.12 11.4 7.09 11.53 7.15 11.64L8.15 13.37C8.21 13.5 8.34 13.53 8.46 13.5L9.7 13C9.96 13.2 10.24 13.37 10.55 13.5L10.74 14.81C10.77 14.93 10.88 15 11 15H13C13.12 15 13.23 14.91 13.25 14.79L13.44 13.47C13.74 13.34 14 13.18 14.28 13L15.53 13.5C15.65 13.5 15.78 13.5 15.84 13.37L16.84 11.64C16.9 11.53 16.87 11.4 16.77 11.32Z" />
    </Svg>
  );
};
