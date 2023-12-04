import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProjectorScreenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 2C3.73478 2 3.48043 2.10536 3.29289 2.29289C3.10536 2.48043 3 2.73478 3 3V4C3 4.26522 3.10536 4.51957 3.29289 4.70711C3.48043 4.89464 3.73478 5 4 5H5V14H11V16.59L6.79 20.79L8.21 22.21L11 19.41V22H13V19.41L15.79 22.21L17.21 20.79L13 16.59V14H19V5H20C20.2652 5 20.5196 4.89464 20.7071 4.70711C20.8946 4.51957 21 4.26522 21 4V3C21 2.73478 20.8946 2.48043 20.7071 2.29289C20.5196 2.10536 20.2652 2 20 2H4Z" />
    </Svg>
  );
};
