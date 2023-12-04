import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LockPatternIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 3C8.06087 3 9.07828 3.42143 9.82843 4.17157C10.5786 4.92172 11 5.93913 11 7C11 8.86 9.73 10.43 8 10.87V13.13C8.37 13.22 8.72 13.37 9.04 13.56L13.56 9.04C13.2 8.44 13 7.75 13 7C13 5.93913 13.4214 4.92172 14.1716 4.17157C14.9217 3.42143 15.9391 3 17 3C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7C21 8.06087 20.5786 9.07828 19.8284 9.82843C19.0783 10.5786 18.0609 11 17 11C16.26 11 15.57 10.8 15 10.45L10.45 15C10.8 15.57 11 16.26 11 17C11 18.0609 10.5786 19.0783 9.82843 19.8284C9.07828 20.5786 8.06087 21 7 21C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17C3 15.14 4.27 13.57 6 13.13V10.87C4.27 10.43 3 8.86 3 7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3ZM17 13C18.0609 13 19.0783 13.4214 19.8284 14.1716C20.5786 14.9217 21 15.9391 21 17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21C15.9391 21 14.9217 20.5786 14.1716 19.8284C13.4214 19.0783 13 18.0609 13 17C13 15.9391 13.4214 14.9217 14.1716 14.1716C14.9217 13.4214 15.9391 13 17 13ZM17 15C16.4696 15 15.9609 15.2107 15.5858 15.5858C15.2107 15.9609 15 16.4696 15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17C19 16.4696 18.7893 15.9609 18.4142 15.5858C18.0391 15.2107 17.5304 15 17 15Z" />
    </Svg>
  );
};
