import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogPlayIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.53 22H9.99996C9.74996 22 9.53996 21.82 9.49996 21.58L9.12996 18.93C8.49996 18.68 7.95996 18.34 7.43996 17.94L4.94996 18.95C4.72996 19.03 4.45996 18.95 4.33996 18.73L2.33996 15.27C2.20996 15.05 2.26996 14.78 2.45996 14.63L4.56996 12.97C4.52996 12.65 4.49996 12.33 4.49996 12C4.49996 11.67 4.52996 11.34 4.56996 11L2.45996 9.37C2.26996 9.22 2.20996 8.95 2.33996 8.73L4.33996 5.27C4.45996 5.05 4.72996 4.96 4.94996 5.05L7.43996 6.05C7.95996 5.66 8.49996 5.32 9.12996 5.07L9.49996 2.42C9.53996 2.18 9.74996 2 9.99996 2H14C14.25 2 14.46 2.18 14.5 2.42L14.87 5.07C15.5 5.32 16.04 5.66 16.56 6.05L19.05 5.05C19.27 4.96 19.54 5.05 19.66 5.27L21.66 8.73C21.78 8.95 21.73 9.22 21.54 9.37L19.43 11C19.47 11.34 19.5 11.67 19.5 12V12.19C19 12.07 18.5 12 18 12C17.08 12 16.22 12.21 15.44 12.58C15.47 12.39 15.5 12.2 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.49996 10.07 8.49996 12C8.49996 13.93 10.07 15.5 12 15.5C12.2 15.5 12.39 15.47 12.58 15.44C12.21 16.22 12 17.08 12 18C12 19.54 12.58 20.94 13.53 22ZM16 15V21L21 18L16 15Z" />
    </Svg>
  );
};
