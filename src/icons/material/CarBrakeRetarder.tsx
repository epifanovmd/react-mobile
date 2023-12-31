import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarBrakeRetarderIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM12 19C8.1 19 5 15.9 5 12C5 8.1 8.1 5 12 5C15.9 5 19 8.1 19 12C19 15.9 15.9 19 12 19ZM20.5 20.5C22.7 18.3 24 15.3 24 12C24 8.7 22.7 5.7 20.5 3.5L19.4 4.6C21.3 6.5 22.5 9.1 22.5 12C22.5 14.9 21.3 17.5 19.4 19.4L20.5 20.5ZM4.6 19.4C2.7 17.5 1.5 14.9 1.5 12C1.5 9.1 2.7 6.5 4.6 4.6L3.5 3.5C1.3 5.7 0 8.7 0 12C0 15.3 1.3 18.3 3.5 20.5L4.6 19.4ZM15.3 10.5C15.96 10.5 16.5 11.17 16.5 12C16.5 12.81 15.95 13.5 15.3 13.5C14.93 13.5 14.66 13.29 14.5 13.11L14.47 13.08L14.44 13.05L13.38 12L14.47 10.92L14.5 10.89L14.53 10.86C14.74 10.63 15 10.5 15.3 10.5ZM8.7 10.5C9.07 10.5 9.34 10.71 9.5 10.88V10.92L9.56 10.95L10.62 12L9.53 13.08L9.5 13.11L9.47 13.15C9.26 13.37 9 13.5 8.7 13.5C8.05 13.5 7.5 12.81 7.5 12C7.5 11.19 8.05 10.5 8.7 10.5ZM15.3 9C14.58 9 13.9 9.31 13.42 9.85L12 11.25L10.61 9.88C10.1 9.31 9.42 9 8.7 9C7.21 9 6 10.35 6 12C6 13.65 7.21 15 8.7 15C9.42 15 10.1 14.69 10.59 14.15L12 12.75L13.39 14.12C13.9 14.68 14.58 15 15.3 15C16.79 15 18 13.65 18 12C18 10.33 16.79 9 15.3 9Z" />
    </Svg>
  );
};
