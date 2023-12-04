import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const InformationOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.4992L2.39998 1.69922L1.09998 2.99922L4.09998 5.99922C2.79998 7.59922 1.99998 9.69922 1.99998 11.9992C1.99998 17.4992 6.49998 21.9992 12 21.9992C14.3 21.9992 16.4 21.1992 18 19.8992L20.8 22.6992L22.1 21.4992ZM13 16.9992H11V12.8992L13 14.8992V16.9992ZM11 7.79922L6.69998 3.49922C8.29998 2.59922 10.1 1.99922 12 1.99922C17.5 1.99922 22 6.49922 22 11.9992C22 13.8992 21.4 15.6992 20.5 17.2992L12.2 8.99922H13V6.99922H11V7.79922Z" />
    </Svg>
  );
};
