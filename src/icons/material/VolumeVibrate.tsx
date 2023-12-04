import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VolumeVibrateIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 9.0007V15.0007H8L13 20.0007V4.0007L8 9.0007H4ZM16.55 2.4707L15.5 3.5307L17.93 6.0007L15 9.0007L17.93 12.0007L15 15.0007L17.93 18.0007L15.5 20.4707L16.55 21.5307L20 18.0007L17.07 15.0007L20 12.0007L17.07 9.0007L20 6.0007L16.55 2.4707Z" />
    </Svg>
  );
};
