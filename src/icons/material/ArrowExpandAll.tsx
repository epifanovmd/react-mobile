import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowExpandAllIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.5 13.09L10.91 14.5L6.41 19H10V21H3V14H5V17.59L9.5 13.09ZM10.91 9.5L9.5 10.91L5 6.41V10H3V3H10V5H6.41L10.91 9.5ZM14.5 13.09L19 17.59V14H21V21H14V19H17.59L13.09 14.5L14.5 13.09ZM13.09 9.5L17.59 5H14V3H21V10H19V6.41L14.5 10.91L13.09 9.5Z" />
    </Svg>
  );
};
