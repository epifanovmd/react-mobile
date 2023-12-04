import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseSyncIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 12V13.5C20.0609 13.5 21.0783 13.9214 21.8284 14.6716C22.5786 15.4217 23 16.4391 23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.837 21.2366 16.2011 20.7678 15.7322C20.2989 15.2634 19.663 15 19 15V16.5L16.75 14.25L19 12ZM19 23V21.5C17.9391 21.5 16.9217 21.0786 16.1716 20.3284C15.4214 19.5783 15 18.5609 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.163 16.7634 18.7989 17.2322 19.2678C17.7011 19.7366 18.337 20 19 20V18.5L21.25 20.75L19 23ZM12 3C16.42 3 20 4.79 20 7C20 9.21 16.42 11 12 11C7.58 11 4 9.21 4 7C4 4.79 7.58 3 12 3ZM4 9C4 11.21 7.58 13 12 13C13.11 13 14.17 12.89 15.14 12.68C14.19 13.54 13.5 14.67 13.18 15.96L12 16C7.58 16 4 14.21 4 12V9ZM20 9V11H19.5L18.9 11.03C19.6 10.43 20 9.74 20 9ZM4 14C4 16.21 7.58 18 12 18L13 17.97C13.09 19.03 13.42 20 13.95 20.88L12 21C7.58 21 4 19.21 4 17V14Z" />
    </Svg>
  );
};
