import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RulerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.38989 18.3606L3.15989 16.6006L4.57989 18.0006L5.63989 16.9506L4.21989 15.5406L5.63989 14.1206L8.10989 16.6006L9.16989 15.5406L6.69989 13.0606L8.10989 11.6506L9.52989 13.0606L10.5899 12.0006L9.16989 10.5906L10.5899 9.17063L13.0599 11.6506L14.1199 10.5906L11.6499 8.11062L13.0599 6.70062L14.4699 8.11062L15.5399 7.05063L14.1199 5.64062L15.5399 4.22062L17.9999 6.70062L19.0699 5.64062L16.5999 3.16063L18.3599 1.39062L22.6099 5.64062L5.63989 22.6106L1.38989 18.3606Z" />
    </Svg>
  );
};
