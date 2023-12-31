import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MonitorSpeakerOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23.1 22.4992L1.39998 0.699219L0.0999756 1.99922L1.19998 3.09922C1.09998 3.39922 0.999976 3.69922 0.999976 3.99922V15.9992C0.999976 17.0992 1.89998 17.9992 2.99998 17.9992H9.99998V19.9992H7.99998V21.9992H12V15.9992H2.99998V4.89922L14 15.8992V20.9992C14 21.5992 14.5 21.9992 15 21.9992H20.1L21.8 23.6992L23.1 22.4992ZM18.5 20.9992C16.6 20.9992 15 19.3992 15 17.4992C15 17.2992 15 17.0992 15.1 16.8992L16.1 17.8992C16.3 18.8992 17.1 19.6992 18.1 19.8992L19.1 20.8992C18.9 20.9992 18.7 20.9992 18.5 20.9992ZM21 17.4992V17.7992L18.2 14.9992H18.5C19.9 14.9992 21 16.0992 21 17.4992ZM23 19.7992V9.99922C23 9.39922 22.5 8.99922 22 8.99922H15C14.4 8.99922 14 9.49922 14 9.99922V10.7992L17.4 14.1992C17.7 14.0992 18.1 13.9992 18.5 13.9992C20.4 13.9992 22 15.5992 22 17.4992C22 17.8992 21.9 18.2992 21.8 18.5992L23 19.7992ZM18.5 12.9992C17.7 12.9992 17 12.2992 17 11.4992C17 10.6992 17.7 9.99922 18.5 9.99922C19.3 9.99922 20 10.6992 20 11.4992C20 12.2992 19.3 12.9992 18.5 12.9992ZM7.19998 3.99922L5.19998 1.99922H21C22.1 1.99922 23 2.89922 23 3.99922V7.99922H21V3.99922H7.19998Z" />
    </Svg>
  );
};
