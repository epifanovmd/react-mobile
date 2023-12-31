import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpeakerBluetoothIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 3C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H12C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H4ZM8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5ZM19 7V10.79L16.71 8.5L16 9.21L18.79 12L16 14.79L16.71 15.5L19 13.21V17H19.5L22.35 14.14L20.21 12L22.35 9.85L19.5 7H19ZM20 8.91L20.94 9.85L20 10.79V8.91ZM8 11C9.06087 11 10.0783 11.4214 10.8284 12.1716C11.5786 12.9217 12 13.9391 12 15C12 16.0609 11.5786 17.0783 10.8284 17.8284C10.0783 18.5786 9.06087 19 8 19C6.93913 19 5.92172 18.5786 5.17157 17.8284C4.42143 17.0783 4 16.0609 4 15C4 13.9391 4.42143 12.9217 5.17157 12.1716C5.92172 11.4214 6.93913 11 8 11ZM8 13C7.46957 13 6.96086 13.2107 6.58579 13.5858C6.21071 13.9609 6 14.4696 6 15C6 15.5304 6.21071 16.0391 6.58579 16.4142C6.96086 16.7893 7.46957 17 8 17C8.53043 17 9.03914 16.7893 9.41421 16.4142C9.78929 16.0391 10 15.5304 10 15C10 14.4696 9.78929 13.9609 9.41421 13.5858C9.03914 13.2107 8.53043 13 8 13ZM20 13.21L20.94 14.14L20 15.08V13.21Z" />
    </Svg>
  );
};
