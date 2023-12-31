import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectionMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 6V4H15V6H11ZM6 9H8V13H6V9ZM6 6C6 4.89 6.9 4 8 4H9V6H8V7H6V6ZM8 18C6.89 18 6 17.1 6 16V15H8V16H9V18H8ZM18 4C19.11 4 20 4.9 20 6V7H18V6H17V4H18ZM15 16V18H11V16H15ZM20 13H18V9H20V13ZM20 16C20 17.11 19.1 18 18 18H17V16H18V15H20V16ZM3 8H4V20H16V21C16 21.54 15.57 22 15.03 22H15H3C2.45 22 2 21.55 2 21V9C2 8.45 2.45 8 3 8Z" />
    </Svg>
  );
};
