import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlertRemoveOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 15.5H13V17.5H11V15.5ZM14 19C14 18.86 14 18.73 14 18.6H5.4L12 7.29999L16.11 14.44C16.62 14 17.2 13.65 17.84 13.41L12 3.29999L2 20.6H14.22C14.08 20.09 14 19.56 14 19ZM13 10.5H11V14.5H13V10.5ZM22.12 15.46L20 17.59L17.88 15.46L16.47 16.88L18.59 19L16.47 21.12L17.88 22.54L20 20.41L22.12 22.54L23.54 21.12L21.41 19L23.54 16.88L22.12 15.46Z" />
    </Svg>
  );
};
