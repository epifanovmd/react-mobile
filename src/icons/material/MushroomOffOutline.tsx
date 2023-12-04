import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MushroomOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L4.1001 5.99922C2.8001 7.59922 2.0001 9.69922 2.0001 11.9992C2.0001 13.0992 2.9001 13.9992 4.0001 13.9992H12.1001L13.1001 14.9992H9.0001L8.0001 18.4992L7.7001 19.4992C7.4001 20.5992 8.1001 21.6992 9.1001 21.8992L9.7001 21.9992H14.4001C15.5001 21.9992 16.4001 21.0992 16.4001 19.9992L16.3001 19.4992L16.0001 18.4992L15.8001 17.5992L20.9001 22.6992L22.1001 21.4992ZM4.0001 11.9992C4.0001 10.2992 4.6001 8.69922 5.5001 7.39922L6.2001 8.09922C6.1001 8.39922 6.0001 8.69922 6.0001 8.99922C6.0001 10.0992 6.9001 10.9992 8.0001 10.9992C8.3001 10.9992 8.6001 10.8992 8.9001 10.7992L10.1001 11.9992H4.0001ZM9.7001 19.9992L10.0001 18.9992L10.6001 16.9992H13.6001L14.2001 18.9992L14.5001 19.9992H9.7001ZM16.0001 10.9992C14.9001 10.9992 14.0001 10.0992 14.0001 8.99922C14.0001 7.89922 14.9001 6.99922 16.0001 6.99922C17.1001 6.99922 18.0001 7.89922 18.0001 8.99922C18.0001 10.0992 17.1001 10.9992 16.0001 10.9992ZM8.2001 4.99922L6.7001 3.49922C8.3001 2.59922 10.1001 1.99922 12.0001 1.99922C17.5001 1.99922 22.0001 6.49922 22.0001 11.9992C22.0001 13.0992 21.1001 13.9992 20.0001 13.9992H17.2001L15.2001 11.9992H20.0001C20.0001 8.29922 17.4001 5.09922 14.0001 4.19922C13.9001 5.19922 13.0001 5.99922 12.0001 5.99922C11.0001 5.99922 10.1001 5.19922 10.0001 4.19922C9.4001 4.39922 8.7001 4.69922 8.2001 4.99922Z" />
    </Svg>
  );
};
