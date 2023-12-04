import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CupWaterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.32 8H5.67L5.23 4H18.77L18.32 8ZM12 19C11.2044 19 10.4413 18.6839 9.87868 18.1213C9.31607 17.5587 9 16.7956 9 16C9 14 12 10.6 12 10.6C12 10.6 15 14 15 16C15 16.7956 14.6839 17.5587 14.1213 18.1213C13.5587 18.6839 12.7956 19 12 19ZM3 2L5 20.23C5.13 21.23 5.97 22 7 22H17C18 22 18.87 21.23 19 20.23L21 2H3Z" />
    </Svg>
  );
};
