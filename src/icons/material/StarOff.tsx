import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StarOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8001 22.6992L17.9001 19.7992L18.2001 20.9992L12.0001 17.2992L5.8001 20.9992L7.4001 13.9992L2.0001 9.19922L6.9001 8.79922L1.1001 2.99922L2.4001 1.69922L22.1001 21.3992L20.8001 22.6992ZM22.0001 9.19922L14.8001 8.59922L12.0001 1.99922L10.0001 6.79922L16.9001 13.6992L22.0001 9.19922Z" />
    </Svg>
  );
};
