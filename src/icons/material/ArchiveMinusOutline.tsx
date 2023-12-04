import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveMinusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 19C13 19.7 13.13 20.37 13.35 21H4V10H6V19H13ZM19 13C19.34 13 19.67 13.04 20 13.09V10H18V13.09C18.33 13.04 18.66 13 19 13ZM9.5 11C9.22 11 9 11.22 9 11.5V13H15V11.5C15 11.22 14.78 11 14.5 11H9.5ZM21 9H3V3H21V9ZM19 5H5V7H19V5ZM15 18V20H23V18H15Z" />
    </Svg>
  );
};
