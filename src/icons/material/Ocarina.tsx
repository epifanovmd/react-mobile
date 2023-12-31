import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OcarinaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 11.9992C16.8 10.3992 13.4 9.69922 10.8 9.29922L9.7 5.89922C9.3 4.79922 7.7 4.79922 7.3 5.89922L6.3 8.99922C3.9 9.39922 2 11.4992 2 13.9992C2 16.7992 4.2 18.9992 7 18.9992C7 18.9992 14 18.9992 20 15.9992C20 15.9992 22 14.9992 22 13.9992C22 12.9992 20 11.9992 20 11.9992ZM5 13.9992C4.4 13.9992 4 13.5992 4 12.9992C4 12.3992 4.4 11.9992 5 11.9992C5.6 11.9992 6 12.3992 6 12.9992C6 13.4992 5.6 13.9992 5 13.9992ZM7 16.9992C6.4 16.9992 6 16.5992 6 15.9992C6 15.3992 6.4 14.9992 7 14.9992C7.6 14.9992 8 15.3992 8 15.9992C8 16.4992 7.6 16.9992 7 16.9992ZM9 13.9992C8.4 13.9992 8 13.5992 8 12.9992C8 12.3992 8.4 11.9992 9 11.9992C9.6 11.9992 10 12.3992 10 12.9992C10 13.4992 9.6 13.9992 9 13.9992ZM11 16.9992C10.4 16.9992 10 16.5992 10 15.9992C10 15.3992 10.4 14.9992 11 14.9992C11.6 14.9992 12 15.3992 12 15.9992C12 16.4992 11.6 16.9992 11 16.9992ZM16 13.9992C15.4 13.9992 15 13.5992 15 12.9992C15 12.3992 15.4 11.9992 16 11.9992C16.6 11.9992 17 12.3992 17 12.9992C17 13.4992 16.6 13.9992 16 13.9992ZM19 14.9992C18.4 14.9992 18 14.5992 18 13.9992C18 13.3992 18.4 12.9992 19 12.9992C19.6 12.9992 20 13.3992 20 13.9992C20 14.4992 19.6 14.9992 19 14.9992Z" />
    </Svg>
  );
};
