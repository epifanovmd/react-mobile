import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const YeastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 14C19.0609 14 20.0783 14.4214 20.8284 15.1716C21.5786 15.9217 22 16.9391 22 18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22C16.9391 22 15.9217 21.5786 15.1716 20.8284C14.4214 20.0783 14 19.0609 14 18L14.09 17.15C14.05 16.45 13.92 15.84 13.55 15.5C13.35 15.3 13.07 15.19 12.75 15.13C11.79 15.68 10.68 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 10.68 15.68 11.79 15.13 12.75C15.19 13.07 15.3 13.35 15.5 13.55C15.84 13.92 16.45 14.05 17.15 14.09L18 14ZM7.5 10C7.89782 10 8.27936 10.158 8.56066 10.4393C8.84196 10.7206 9 11.1022 9 11.5C9 11.8978 8.84196 12.2794 8.56066 12.5607C8.27936 12.842 7.89782 13 7.5 13C7.10218 13 6.72064 12.842 6.43934 12.5607C6.15804 12.2794 6 11.8978 6 11.5C6 11.1022 6.15804 10.7206 6.43934 10.4393C6.72064 10.158 7.10218 10 7.5 10ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z" />
    </Svg>
  );
};
