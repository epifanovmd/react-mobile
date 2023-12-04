import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BicycleElectricIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 7C18.44 7 17.91 7.11 17.41 7.28L14.46 1.5H11V3H13.54L14.42 4.72L12 10.13L10.23 5.95C10.5 5.85 10.74 5.58 10.74 5.25C10.74 4.84 10.41 4.5 10 4.5H8C7.58 4.5 7.24 4.84 7.24 5.25C7.24 5.66 7.58 6 8 6H8.61L10.86 11.25H9.92C9.56 8.85 7.5 7 5 7C2.24 7 0 9.24 0 12C0 14.76 2.24 17 5 17C7.5 17 9.56 15.15 9.92 12.75H12.5L15.29 6.43L16.08 7.96C14.82 8.87 14 10.34 14 12C14 14.76 16.24 17 19 17C21.76 17 24 14.76 24 12C24 9.24 21.76 7 19 7ZM5 15.5C3.07 15.5 1.5 13.93 1.5 12C1.5 10.07 3.07 8.5 5 8.5C6.67 8.5 8.07 9.68 8.41 11.25H4V12.75H8.41C8.07 14.32 6.67 15.5 5 15.5ZM19 15.5C17.07 15.5 15.5 13.93 15.5 12C15.5 10.92 16 9.97 16.77 9.33L18.57 12.85L19.89 12.13L18.1 8.63C18.39 8.56 18.69 8.5 19 8.5C20.93 8.5 22.5 10.07 22.5 12C22.5 13.93 20.93 15.5 19 15.5ZM11 20H7L13 23V21H17L11 18V20Z" />
    </Svg>
  );
};
