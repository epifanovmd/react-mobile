import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagHeartOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4ZM11 4L20 13L13 20L4 11V4H11ZM6.5 5C6.10218 5 5.72064 5.15804 5.43934 5.43934C5.15804 5.72064 5 6.10218 5 6.5C5 6.89782 5.15804 7.27936 5.43934 7.56066C5.72064 7.84196 6.10218 8 6.5 8C6.89782 8 7.27936 7.84196 7.56066 7.56066C7.84196 7.27936 8 6.89782 8 6.5C8 6.10218 7.84196 5.72064 7.56066 5.43934C7.27936 5.15804 6.89782 5 6.5 5ZM10.95 10.5C9.82 10.5 8.9 11.42 8.9 12.55C8.9 13.12 9.13 13.62 9.5 14L13 17.5L16.5 14C16.87 13.63 17.1 13.11 17.1 12.55C17.1 12.2808 17.047 12.0142 16.944 11.7655C16.8409 11.5168 16.6899 11.2908 16.4996 11.1004C16.3092 10.9101 16.0832 10.7591 15.8345 10.656C15.5858 10.553 15.3192 10.5 15.05 10.5C14.5 10.5 13.97 10.73 13.6 11.1L13 11.7L12.4 11.11C12.03 10.73 11.5 10.5 10.95 10.5Z" />
    </Svg>
  );
};
