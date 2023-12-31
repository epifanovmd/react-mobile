import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShareOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.4992L2.39998 1.69922L1.09998 2.99922L8.89998 10.7992C5.39998 12.8992 3.69998 16.3992 2.99998 19.9992C5.29998 16.6992 8.59998 15.0992 13 14.8992L14 15.8992V18.9992L15.6 17.3992L20.8 22.6992L22.1 21.4992ZM8.29998 13.7992C8.93998 13.2192 9.64997 12.7092 10.4 12.2992L11.3 13.0992L8.29998 13.7992ZM14.2 10.9992L12.5 9.29922L14 8.99922V4.99922L21 11.9992L18.1 14.8992L16.7 13.4992L18.2 11.9992L16 9.79922V10.6992" />
    </Svg>
  );
};
