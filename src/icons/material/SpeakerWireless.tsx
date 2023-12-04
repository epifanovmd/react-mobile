import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpeakerWirelessIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.07 19.07L18.66 17.66C20.11 16.22 21 14.21 21 12C21 9.78 20.11 7.78 18.66 6.34L20.07 4.93C21.88 6.74 23 9.24 23 12C23 14.76 21.88 17.26 20.07 19.07ZM17.24 16.24L15.83 14.83C16.55 14.11 17 13.11 17 12C17 10.89 16.55 9.89 15.83 9.17L17.24 7.76C18.33 8.85 19 10.35 19 12C19 13.65 18.33 15.15 17.24 16.24ZM4 3H12C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3ZM8 5C7.46957 5 6.96086 5.21071 6.58579 5.58579C6.21071 5.96086 6 6.46957 6 7C6 7.53043 6.21071 8.03914 6.58579 8.41421C6.96086 8.78929 7.46957 9 8 9C8.53043 9 9.03914 8.78929 9.41421 8.41421C9.78929 8.03914 10 7.53043 10 7C10 6.46957 9.78929 5.96086 9.41421 5.58579C9.03914 5.21071 8.53043 5 8 5ZM8 11C6.93913 11 5.92172 11.4214 5.17157 12.1716C4.42143 12.9217 4 13.9391 4 15C4 16.0609 4.42143 17.0783 5.17157 17.8284C5.92172 18.5786 6.93913 19 8 19C9.06087 19 10.0783 18.5786 10.8284 17.8284C11.5786 17.0783 12 16.0609 12 15C12 13.9391 11.5786 12.9217 10.8284 12.1716C10.0783 11.4214 9.06087 11 8 11ZM8 13C8.53043 13 9.03914 13.2107 9.41421 13.5858C9.78929 13.9609 10 14.4696 10 15C10 15.5304 9.78929 16.0391 9.41421 16.4142C9.03914 16.7893 8.53043 17 8 17C7.46957 17 6.96086 16.7893 6.58579 16.4142C6.21071 16.0391 6 15.5304 6 15C6 14.4696 6.21071 13.9609 6.58579 13.5858C6.96086 13.2107 7.46957 13 8 13Z" />
    </Svg>
  );
};
