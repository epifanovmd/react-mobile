import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LinuxMintIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 3.23047V6.80047H3.5C4.59 6.80047 4.78 7.53047 4.78 8.55047V14.8605C4.78 18.1205 7.65 20.7705 11.18 20.7705H19.9C21 20.7705 22 20.0705 22 19.0005V9.20047C22 5.93047 19.13 3.28047 15.6 3.28047H11.93V3.27047L2 3.23047ZM6.62 5.46047H8.37V14.4505C8.37 15.6505 9.19 16.5905 10.16 16.5905L16.13 16.6105C17.38 16.6105 18.35 15.7505 18.35 14.7305L18.34 9.96047C18.34 9.65047 18.24 9.41047 18 9.19047C17.79 8.96047 17.56 8.86047 17.25 8.86047C16.94 8.86047 16.71 8.96047 16.5 9.19047C16.27 9.41047 16.16 9.65047 16.16 9.96047V14.0505H14.31V9.96047C14.31 9.65047 14.21 9.41047 14 9.19047C13.77 8.96047 13.54 8.86047 13.22 8.86047C12.92 8.86047 12.68 8.96047 12.46 9.19047C12.24 9.41047 12.14 9.65047 12.14 9.96047V14.0505H10.29V9.96047C10.29 9.15047 10.58 8.44047 11.15 7.86047C11.72 7.29047 12.43 7.00047 13.22 7.00047C14 7.00047 14.68 7.28047 15.24 7.82047C15.79 7.28047 16.47 7.00047 17.25 7.00047C18.05 7.00047 18.76 7.29047 19.32 7.86047C19.89 8.44047 20.19 9.15047 20.19 9.96047L20.2 15.0605C20.11 15.9105 19.75 16.6705 19.13 17.3105C18.4 18.0405 17.5 18.4205 16.5 18.4205H9.83C9 18.3405 8.29 17.9505 7.69 17.3605C7 16.6505 6.62 15.7905 6.62 14.7905V5.46047Z" />
    </Svg>
  );
};
