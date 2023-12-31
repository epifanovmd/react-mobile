import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkateboardIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.00003 14.4995C9.00003 15.3295 8.33003 15.9995 7.50003 15.9995C6.67003 15.9995 6.00003 15.3295 6.00003 14.4995C6.00003 13.6695 6.67003 12.9995 7.50003 12.9995C8.33003 12.9995 9.00003 13.6695 9.00003 14.4995ZM16.5 12.9995C15.67 12.9995 15 13.6695 15 14.4995C15 15.3295 15.67 15.9995 16.5 15.9995C17.33 15.9995 18 15.3295 18 14.4995C18 13.6695 17.33 12.9995 16.5 12.9995ZM21.59 9.18949C21.14 8.86949 20.5 8.96949 20.19 9.40949L20.06 9.58949C19.88 9.84949 19.57 9.99949 19.26 9.99949H4.74003C4.43003 9.99949 4.13003 9.84949 3.94003 9.58949L3.81003 9.40949C3.50003 8.96949 2.86003 8.86949 2.41003 9.18949C1.96003 9.49949 1.87003 10.1495 2.19003 10.5895L2.32003 10.7695C2.88003 11.5395 3.79003 11.9995 4.74003 11.9995H19.26C20.21 11.9995 21.12 11.5395 21.68 10.7695L21.81 10.5895C22.13 10.1495 22.04 9.49949 21.59 9.18949Z" />
    </Svg>
  );
};
