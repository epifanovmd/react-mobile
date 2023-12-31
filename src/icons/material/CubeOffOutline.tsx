import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CubeOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L4.29999 6.19047L3.52999 6.62047C3.20999 6.79047 2.99999 7.12047 2.99999 7.50047V16.5005C2.99999 16.8805 3.20999 17.2105 3.52999 17.3805L11.43 21.8205C11.59 21.9405 11.79 22.0005 12 22.0005C12.21 22.0005 12.41 21.9405 12.57 21.8205L17.28 19.1705L20.84 22.7305L22.11 21.4605ZM4.99999 15.9105V9.21047L10.29 12.1805L11 12.8905V19.2905L4.99999 15.9105ZM13 19.2905V14.8905L15.82 17.7005L13 19.2905ZM8.99999 5.82047L7.55999 4.36047L11.43 2.18047C11.59 2.06047 11.79 2.00047 12 2.00047C12.21 2.00047 12.41 2.06047 12.57 2.18047L20.47 6.62047C20.79 6.79047 21 7.12047 21 7.50047V16.5005C21 16.8505 20.82 17.1605 20.53 17.3305L19 15.8005V9.21047L14.78 11.5805L13.31 10.1105L17.96 7.50047L12 4.15047L8.99999 5.82047Z" />
    </Svg>
  );
};
