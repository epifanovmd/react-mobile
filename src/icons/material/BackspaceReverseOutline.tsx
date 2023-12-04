import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BackspaceReverseOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 15.59L6.41 17L10 13.41L13.59 17L15 15.59L11.41 12L15 8.41L13.59 7L10 10.59L6.41 7L5 8.41L8.59 12L5 15.59ZM2 3C1.46957 3 0.960859 3.21071 0.585786 3.58579C0.210714 3.96086 0 4.46957 0 5L0 19C0 19.5304 0.210714 20.0391 0.585786 20.4142C0.960859 20.7893 1.46957 21 2 21H17C17.69 21 18.23 20.64 18.59 20.11L24 12L18.59 3.88C18.23 3.35 17.69 3 17 3H2ZM2 5H17L21.72 12L17 19H2V5Z" />
    </Svg>
  );
};
