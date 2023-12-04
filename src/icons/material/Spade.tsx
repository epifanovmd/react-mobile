import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpadeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.71 1.2207L12.88 4.0507C12.1 4.8307 12.1 6.0907 12.88 6.8707L14.3 8.2907L10.06 12.5307L7.57997 10.0607L1.21997 16.4207L7.57997 22.7807L13.94 16.4207L11.47 13.9407L15.71 9.7007L17.13 11.1207C17.91 11.9007 19.17 11.9007 19.95 11.1207L22.78 8.2907L15.71 1.2207ZM15.71 4.0507L19.95 8.2907L18.54 9.7007L14.3 5.4607L15.71 4.0507Z" />
    </Svg>
  );
};
