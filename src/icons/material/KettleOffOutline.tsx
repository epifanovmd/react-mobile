import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KettleOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L4.7001 6.59922C4.3001 7.29922 4.0001 8.09922 4.0001 8.99922C4.0001 10.1992 4.5001 11.2992 5.4001 12.2992C4.5001 13.4992 4.0001 14.9992 4.0001 16.4992V19.9992C4.0001 21.0992 4.9001 21.9992 6.0001 21.9992H19.0001C19.3001 21.9992 19.6001 21.8992 19.9001 21.7992L20.8001 22.6992L22.1001 21.4992ZM8.2001 10.0992L7.6001 10.3992C7.2001 9.99922 7.0001 9.49922 7.0001 8.99922V8.89922L8.2001 10.0992ZM6.0001 19.9992V16.4992C6.0001 14.6992 7.6001 12.5992 9.7001 11.5992L10.9001 12.7992C9.1001 13.3992 8.0001 14.7992 8.0001 16.9992V17.9992H10.0001V16.9992C10.0001 16.1992 10.0001 14.4992 11.4001 13.2992L18.1001 19.9992H6.0001ZM16.9001 10.0992L19.0001 7.99922L22.0001 10.9992L20.0001 12.9992C20.7001 14.0992 21.0001 15.2992 21.0001 16.4992V17.7992L18.9001 15.6992C18.5001 13.8992 16.8001 12.0992 14.6001 11.3992L12.2001 8.99922C13.8001 8.89922 15.4001 9.29922 16.9001 10.0992ZM9.5001 6.29922L7.4001 4.19922C8.8001 3.49922 10.6001 2.99922 12.5001 2.99922C14.6001 2.99922 16.6001 3.49922 18.3001 4.69922L16.3001 6.69922C15.3001 6.09922 13.9001 5.69922 12.5001 5.69922C11.4001 5.69922 10.3001 5.89922 9.5001 6.29922Z" />
    </Svg>
  );
};
