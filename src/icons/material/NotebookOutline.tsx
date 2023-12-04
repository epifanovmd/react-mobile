import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NotebookOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 4V10L15 8L13 10V4H9V20H19V4H17ZM3 7V5H5V4C5 2.89 5.9 2 7 2H19C20.05 2 21 2.95 21 4V20C21 21.05 20.05 22 19 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3ZM5 5V7H7V5H5ZM5 19H7V17H5V19ZM5 13H7V11H5V13Z" />
    </Svg>
  );
};
