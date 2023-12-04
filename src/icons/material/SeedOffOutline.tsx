import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeedOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L5.9001 7.79922C3.8001 10.4992 2.6001 14.5992 3.2001 20.7992C4.3001 20.8992 5.4001 20.9992 6.4001 20.9992C10.9001 20.9992 14.1001 19.8992 16.3001 18.1992L20.9001 22.7992L22.1001 21.4992ZM6.4001 18.9992H5.1001C4.9001 14.7992 5.6001 11.4992 7.3001 9.19922L8.9001 10.7992C7.0001 13.6992 7.0001 16.9992 7.0001 16.9992C8.0001 14.9992 9.1001 13.3992 10.2001 12.0992L14.8001 16.6992C12.8001 18.1992 10.0001 18.9992 6.4001 18.9992ZM10.0001 6.79922L8.5001 5.29922C11.3001 3.39922 14.7001 2.99922 17.2001 2.99922C19.3001 2.99922 20.7001 3.29922 20.7001 3.29922C20.7001 3.29922 22.1001 10.2992 18.7001 15.4992L17.2001 13.9992C19.1001 10.8992 19.0001 7.09922 18.9001 5.09922C18.4001 4.99922 17.8001 4.99922 17.2001 4.99922C15.1001 4.99922 12.3001 5.29922 10.0001 6.79922ZM12.8001 9.59922L11.6001 8.39922C12.9001 7.49922 14.7001 6.99922 17.0001 6.99922C17.0001 6.99922 15.1001 7.59922 12.8001 9.59922Z" />
    </Svg>
  );
};
