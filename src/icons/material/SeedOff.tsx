import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeedOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L5.9001 7.79922C3.8001 10.4992 2.6001 14.5992 3.2001 20.7992C4.3001 20.8992 5.4001 20.9992 6.4001 20.9992C10.9001 20.9992 14.1001 19.8992 16.3001 18.1992L20.9001 22.7992L22.1001 21.4992ZM7.0001 16.9992C7.0001 16.9992 7.0001 13.6992 8.9001 10.7992L10.2001 12.0992C9.1001 13.3992 8.0001 14.9992 7.0001 16.9992ZM11.6001 8.39922L8.5001 5.29922C11.3001 3.39922 14.7001 2.99922 17.2001 2.99922C19.3001 2.99922 20.7001 3.29922 20.7001 3.29922C20.7001 3.29922 22.1001 10.2992 18.7001 15.4992L12.8001 9.59922C15.1001 7.59922 17.0001 6.99922 17.0001 6.99922C14.7001 6.99922 12.9001 7.49922 11.6001 8.39922Z" />
    </Svg>
  );
};
