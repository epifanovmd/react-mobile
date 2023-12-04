import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveCheckOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 3H3V9H21V3ZM19 7H5V5H19V7ZM14.5 11C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11H14.5ZM18 13.09V10H20V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09ZM13 19C13 19.7 13.13 20.37 13.35 21H4V10H6V19H13ZM22.5 17.25L17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25Z" />
    </Svg>
  );
};
