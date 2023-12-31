import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BombIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.25 6C11.25 5.13805 11.5924 4.3114 12.2019 3.7019C12.8114 3.09241 13.638 2.75 14.5 2.75C15.362 2.75 16.1886 3.09241 16.7981 3.7019C17.4076 4.3114 17.75 5.13805 17.75 6C17.75 6.42 18.08 6.75 18.5 6.75C18.92 6.75 19.25 6.42 19.25 6V5.25H20.75V6C20.75 6.59674 20.5129 7.16903 20.091 7.59099C19.669 8.01295 19.0967 8.25 18.5 8.25C17.9033 8.25 17.331 8.01295 16.909 7.59099C16.4871 7.16903 16.25 6.59674 16.25 6C16.25 5.53587 16.0656 5.09075 15.7374 4.76256C15.4092 4.43437 14.9641 4.25 14.5 4.25C14.0359 4.25 13.5908 4.43437 13.2626 4.76256C12.9344 5.09075 12.75 5.53587 12.75 6H14V7.29C16.89 8.15 19 10.83 19 14C19 15.8565 18.2625 17.637 16.9497 18.9497C15.637 20.2625 13.8565 21 12 21C10.1435 21 8.36301 20.2625 7.05025 18.9497C5.7375 17.637 5 15.8565 5 14C5 10.83 7.11 8.15 10 7.29V6H11.25ZM22 6H24V7H22V6ZM19 4V2H20V4H19ZM20.91 4.38L22.33 2.96L23.04 3.67L21.62 5.09L20.91 4.38Z" />
    </Svg>
  );
};
