import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudDownloadOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 13H10.55V10H13.45V13H16L12 17L8 13ZM19.35 10.04C21.95 10.22 24 12.36 24 15C24 15.6566 23.8707 16.3068 23.6194 16.9134C23.3681 17.52 22.9998 18.0712 22.5355 18.5355C22.0712 18.9998 21.52 19.3681 20.9134 19.6194C20.3068 19.8707 19.6566 20 19 20H6C4.4087 20 2.88258 19.3679 1.75736 18.2426C0.632141 17.1174 0 15.5913 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4C15.64 4 18.67 6.59 19.35 10.04ZM19 18C19.7956 18 20.5587 17.6839 21.1213 17.1213C21.6839 16.5587 22 15.7956 22 15C22 13.45 20.78 12.14 19.22 12.04L17.69 11.93L17.39 10.43C16.88 7.86 14.62 6 12 6C9.94 6 8.08 7.14 7.13 8.97L6.63 9.92L5.56 10.03C3.53 10.24 2 11.95 2 14C2 15.0609 2.42143 16.0783 3.17157 16.8284C3.92172 17.5786 4.93913 18 6 18H19Z" />
    </Svg>
  );
};
