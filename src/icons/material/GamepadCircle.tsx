import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GamepadCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 8C6.06087 8 7.07828 8.42143 7.82843 9.17157C8.57857 9.92172 9 10.9391 9 12C9 13.0609 8.57857 14.0783 7.82843 14.8284C7.07828 15.5786 6.06087 16 5 16C3.93913 16 2.92172 15.5786 2.17157 14.8284C1.42143 14.0783 1 13.0609 1 12C1 10.9391 1.42143 9.92172 2.17157 9.17157C2.92172 8.42143 3.93913 8 5 8ZM12 1C13.0609 1 14.0783 1.42143 14.8284 2.17157C15.5786 2.92172 16 3.93913 16 5C16 6.06087 15.5786 7.07828 14.8284 7.82843C14.0783 8.57857 13.0609 9 12 9C10.9391 9 9.92172 8.57857 9.17157 7.82843C8.42143 7.07828 8 6.06087 8 5C8 3.93913 8.42143 2.92172 9.17157 2.17157C9.92172 1.42143 10.9391 1 12 1ZM12 15C13.0609 15 14.0783 15.4214 14.8284 16.1716C15.5786 16.9217 16 17.9391 16 19C16 20.0609 15.5786 21.0783 14.8284 21.8284C14.0783 22.5786 13.0609 23 12 23C10.9391 23 9.92172 22.5786 9.17157 21.8284C8.42143 21.0783 8 20.0609 8 19C8 17.9391 8.42143 16.9217 9.17157 16.1716C9.92172 15.4214 10.9391 15 12 15ZM19 8C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16C17.9391 16 16.9217 15.5786 16.1716 14.8284C15.4214 14.0783 15 13.0609 15 12C15 10.9391 15.4214 9.92172 16.1716 9.17157C16.9217 8.42143 17.9391 8 19 8Z" />
    </Svg>
  );
};
