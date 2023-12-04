import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BikeFastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 1.2C15 1.2 14.2 2 14.2 3C14.2 4 15 4.8 16 4.8C17 4.8 17.8 4 17.8 3C17.8 2 17 1.2 16 1.2ZM12.4 4.1C11.93 4.1 11.5 4.29 11.2 4.6L7.5 8.29C7.19 8.6 7 9 7 9.5C7 10.13 7.33 10.66 7.85 10.97L11.2 13V18H13V11.5L10.75 9.85L13.07 7.5L14.8 10H19V8.2H15.8L13.86 4.93C13.57 4.43 13 4.1 12.4 4.1ZM10 3H3C2.45 3 2 2.55 2 2C2 1.45 2.45 1 3 1H12.79C12.58 1.34 12.41 1.71 12.32 2.11C11.46 2.13 10.65 2.45 10 3ZM5 12C2.24 12 0 14.24 0 17C0 19.76 2.24 22 5 22C7.76 22 10 19.76 10 17C10 14.24 7.76 12 5 12ZM5 20.5C3.07 20.5 1.5 18.93 1.5 17C1.5 15.07 3.07 13.5 5 13.5C6.93 13.5 8.5 15.07 8.5 17C8.5 18.93 6.93 20.5 5 20.5ZM19 12C16.24 12 14 14.24 14 17C14 19.76 16.24 22 19 22C21.76 22 24 19.76 24 17C24 14.24 21.76 12 19 12ZM19 20.5C17.07 20.5 15.5 18.93 15.5 17C15.5 15.07 17.07 13.5 19 13.5C20.93 13.5 22.5 15.07 22.5 17C22.5 18.93 20.93 20.5 19 20.5ZM5.32 11H1C0.448 11 0 10.55 0 10C0 9.45 0.448 9 1 9H5.05C5.03 9.16 5 9.33 5 9.5C5 10.03 5.12 10.54 5.32 11ZM6 7H2C1.45 7 1 6.55 1 6C1 5.45 1.45 5 2 5H7.97L6.09 6.87C6.05 6.91 6 6.96 6 7Z" />
    </Svg>
  );
};
