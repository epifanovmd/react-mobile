import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AxeBattleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.47 12.4299C19.35 14.5499 15.82 13.8399 15.82 13.8399V9.59992L3.41 21.9999L2 20.5899L14.4 8.17992H10.16C10.16 8.17992 9.45 4.64992 11.57 2.52992C13.69 0.405923 17.23 1.10992 17.23 1.10992V5.35992L17.94 4.64992L19.35 6.05992L18.64 6.76992H22.89C22.89 6.76992 23.59 10.3099 21.47 12.4299Z" />
    </Svg>
  );
};
