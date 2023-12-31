import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RestartOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8001 22.6992L16.6001 18.4992C14.9001 19.6992 12.9001 20.1992 10.9001 19.8992L11.4001 17.8992C12.7001 17.9992 14.0001 17.6992 15.1001 16.9992L1.1001 2.99922L2.4001 1.69922L16.5001 15.7992L17.9001 17.1992L22.1001 21.3992L20.8001 22.6992ZM12.0001 5.99922C13.5001 5.99922 15.1001 6.59922 16.2001 7.79922C18.0001 9.59922 18.4001 12.1992 17.5001 14.3992L19.0001 15.8992C20.7001 12.8992 20.2001 8.99922 17.6001 6.39922C16.1001 4.79922 14.0001 3.99922 12.0001 3.99922V0.699219L7.9001 4.69922L12.0001 8.79922V5.99922ZM6.6001 9.39922L5.1001 7.89922C3.3001 10.9992 3.7001 14.9992 6.3001 17.6992C7.1001 18.3992 8.0001 18.9992 9.0001 19.3992L9.5001 17.3992C8.9001 17.0992 8.3001 16.6992 7.7001 16.1992C5.9001 14.3992 5.5001 11.5992 6.6001 9.39922Z" />
    </Svg>
  );
};
