import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NotebookPlusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 4V10L15 8L13 10V4H9V20H12.1C12.2 20.7 12.5 21.4 12.8 22H7C5.9 22 5 21 5 20V19H3V17H5V13H3V11H5V7H3V5H5V4C5 2.9 5.9 2 7 2H19C20 2 21 3 21 4V13.8C20.4 13.4 19.7 13.2 19 13.1V4H17ZM5 19H7V17H5V19ZM5 13H7V11H5V13ZM5 7H7V5H5V7ZM17 15V18H14V20H17V23H19V20H22V18H19V15H17Z" />
    </Svg>
  );
};
