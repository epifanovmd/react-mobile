import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RhombusMediumOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 6.46094C11.72 6.46094 11.44 6.56094 11.22 6.78094L6.78002 11.2209C6.35002 11.6509 6.35002 12.3509 6.78002 12.7809L11.22 17.2209C11.65 17.6509 12.35 17.6509 12.78 17.2209L17.22 12.7809C17.65 12.3509 17.65 11.6509 17.22 11.2209L12.78 6.78094C12.56 6.56094 12.28 6.46094 12 6.46094ZM12 8.83094L15.17 12.0009L12 15.1709L8.83002 12.0009L12 8.83094Z" />
    </Svg>
  );
};
