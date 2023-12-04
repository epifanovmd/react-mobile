import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SoySauceOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L8.6001 10.4992C7.5001 12.5992 6.0001 15.2992 6.0001 17.5992V19.5992C6.0001 20.9992 8.7001 21.8992 12.0001 21.8992C15.1001 21.8992 17.7001 21.0992 18.0001 19.8992L20.9001 22.7992L22.1001 21.4992ZM12.0001 14.9992C10.9001 14.9992 10.0001 14.0992 10.0001 12.9992C10.0001 12.6992 10.1001 12.3992 10.2001 12.0992L12.9001 14.7992C12.6001 14.8992 12.3001 14.9992 12.0001 14.9992ZM8.3001 3.49922H7.5001V1.99922H16.5001V3.49922H15.7001L14.8001 5.99922H14.2001C14.1001 6.29922 13.9001 6.79922 13.9001 7.49922C13.9001 8.39922 15.9001 10.9992 17.1001 13.8992L10.1001 6.89922C10.0001 6.49922 9.9001 6.19922 9.8001 5.99922H9.2001L8.3001 3.49922Z" />
    </Svg>
  );
};
