import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MinusCircleOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L4.1001 5.99922C2.8001 7.59922 2.0001 9.69922 2.0001 11.9992C2.0001 17.4992 6.5001 21.9992 12.0001 21.9992C14.3001 21.9992 16.4001 21.1992 18.0001 19.8992L20.8001 22.6992L22.1001 21.4992ZM12.0001 19.9992C7.6001 19.9992 4.0001 16.3992 4.0001 11.9992C4.0001 10.2992 4.6001 8.69922 5.5001 7.39922L9.1001 10.9992H7.0001V12.9992H11.1001L16.6001 18.4992C15.3001 19.3992 13.7001 19.9992 12.0001 19.9992ZM8.2001 4.99922L6.7001 3.49922C8.3001 2.59922 10.1001 1.99922 12.0001 1.99922C17.5001 1.99922 22.0001 6.49922 22.0001 11.9992C22.0001 13.8992 21.4001 15.6992 20.5001 17.2992L19.0001 15.7992C19.6001 14.6992 20.0001 13.3992 20.0001 11.9992C20.0001 7.59922 16.4001 3.99922 12.0001 3.99922C10.6001 3.99922 9.3001 4.39922 8.2001 4.99922ZM16.2001 12.9992L14.2001 10.9992H17.0001V12.9992H16.2001Z" />
    </Svg>
  );
};
