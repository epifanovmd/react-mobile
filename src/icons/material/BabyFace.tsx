import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyFaceIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 12C1 10.19 2.2 8.66 3.86 8.17C5.29 5.11 8.4 3 12 3C15.6 3 18.71 5.11 20.15 8.17C21.8 8.66 23 10.19 23 12C23 13.81 21.8 15.34 20.15 15.83C18.71 18.89 15.6 21 12 21C8.4 21 5.29 18.89 3.86 15.83C2.2 15.34 1 13.81 1 12ZM14.5 9.25C14.1685 9.25 13.8505 9.3817 13.6161 9.61612C13.3817 9.85054 13.25 10.1685 13.25 10.5C13.25 10.8315 13.3817 11.1495 13.6161 11.3839C13.8505 11.6183 14.1685 11.75 14.5 11.75C14.8315 11.75 15.1495 11.6183 15.3839 11.3839C15.6183 11.1495 15.75 10.8315 15.75 10.5C15.75 10.1685 15.6183 9.85054 15.3839 9.61612C15.1495 9.3817 14.8315 9.25 14.5 9.25ZM9.5 9.25C9.16848 9.25 8.85054 9.3817 8.61612 9.61612C8.3817 9.85054 8.25 10.1685 8.25 10.5C8.25 10.8315 8.3817 11.1495 8.61612 11.3839C8.85054 11.6183 9.16848 11.75 9.5 11.75C9.83152 11.75 10.1495 11.6183 10.3839 11.3839C10.6183 11.1495 10.75 10.8315 10.75 10.5C10.75 10.1685 10.6183 9.85054 10.3839 9.61612C10.1495 9.3817 9.83152 9.25 9.5 9.25ZM7.5 14C8.26 15.77 10 17 12 17C14 17 15.74 15.77 16.5 14H7.5ZM3 12C3 12.82 3.5 13.53 4.21 13.84C4.07 13.25 4 12.63 4 12C4 11.37 4.07 10.75 4.21 10.16C3.5 10.47 3 11.18 3 12ZM21 12C21 11.18 20.5 10.47 19.79 10.16C19.93 10.75 20 11.37 20 12C20 12.63 19.93 13.25 19.79 13.84C20.5 13.53 21 12.82 21 12Z" />
    </Svg>
  );
};
