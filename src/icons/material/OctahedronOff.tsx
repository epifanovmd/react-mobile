import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OctahedronOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 5.41047V7.80047L13.88 10.6805L17.84 12.0005L15.86 12.6605L18.81 15.6105L21.71 12.7105H21.7C22.09 12.3205 22.09 11.6805 21.7 11.2905H21.71L12.71 2.29047C12.5 2.10047 12.26 2.00047 12 2.00047C11.74 2.00047 11.5 2.10047 11.29 2.29047L8.38999 5.19047L9.80999 6.61047L11 5.41047ZM13 5.41047L17.3 9.71047L13 8.28047V5.41047ZM2.38999 1.73047L1.10999 3.00047L5.84999 7.74047L2.28999 11.2905H2.29999C1.90999 11.6805 1.90999 12.3205 2.29999 12.7105H2.28999L11.29 21.7105C11.5 21.9005 11.74 22.0005 12 22.0005C12.26 22.0005 12.5 21.9005 12.71 21.7105L16.26 18.1505L20.84 22.7305L22.11 21.4605L2.38999 1.73047ZM7.25999 9.15047L7.53999 9.43047L6.69999 9.71047L7.25999 9.15047ZM11 18.5905L6.69999 14.2905L11 15.7205V18.5905ZM12 13.9505L6.15999 12.0005L9.11999 11.0005L12.04 13.9305L12 13.9505ZM13 18.5905V15.7205L13.62 15.5005L14.85 16.7405L13 18.5905Z" />
    </Svg>
  );
};
