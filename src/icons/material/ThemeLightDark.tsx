import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThemeLightDarkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 2.0007C5.71 3.1507 4.5 5.1807 4.5 7.5007C4.5 9.8207 5.71 11.8507 7.53 13.0007C4.46 13.0007 2 10.5407 2 7.5007C2 6.04201 2.57946 4.64307 3.61091 3.61162C4.64236 2.58017 6.04131 2.0007 7.5 2.0007ZM19.07 3.5007L20.5 4.9307L4.93 20.5007L3.5 19.0707L19.07 3.5007ZM12.89 5.9307L11.41 5.0007L9.97 6.0007L10.39 4.3007L9 3.2407L10.75 3.1207L11.33 1.4707L12 3.1007L13.73 3.1307L12.38 4.2607L12.89 5.9307ZM9.59 9.5407L8.43 8.8107L7.31 9.5907L7.65 8.2707L6.56 7.4407L7.92 7.3507L8.37 6.0607L8.88 7.3307L10.24 7.3607L9.19 8.2307L9.59 9.5407ZM19 13.5007C19 14.9594 18.4205 16.3583 17.3891 17.3898C16.3576 18.4212 14.9587 19.0007 13.5 19.0007C12.28 19.0007 11.15 18.6007 10.24 17.9307L17.93 10.2407C18.6 11.1507 19 12.2807 19 13.5007ZM14.6 20.0807L17.37 18.9307L17.13 22.2807L14.6 20.0807ZM18.93 17.3807L20.08 14.6107L22.28 17.1507L18.93 17.3807ZM20.08 12.4207L18.94 9.6407L22.28 9.8807L20.08 12.4207ZM9.63 18.9307L12.4 20.0807L9.87 22.2707L9.63 18.9307Z" />
    </Svg>
  );
};
