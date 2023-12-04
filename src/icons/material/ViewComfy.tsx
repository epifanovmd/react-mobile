import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewComfyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 9H7V5H3V9ZM3 14H7V10H3V14ZM8 14H12V10H8V14ZM13 14H17V10H13V14ZM8 9H12V5H8V9ZM13 5V9H17V5H13ZM18 14H22V10H18V14ZM3 19H7V15H3V19ZM8 19H12V15H8V19ZM13 19H17V15H13V19ZM18 19H22V15H18V19ZM18 5V9H22V5H18Z" />
    </Svg>
  );
};
