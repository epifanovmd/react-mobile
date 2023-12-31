import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ImageFilterDramaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 18H6C4.93913 18 3.92172 17.5786 3.17157 16.8284C2.42143 16.0783 2 15.0609 2 14C2 12.9391 2.42143 11.9217 3.17157 11.1716C3.92172 10.4214 4.93913 10 6 10C7.06087 10 8.07828 10.4214 8.82843 11.1716C9.57857 11.9217 10 12.9391 10 14H12C12 11.24 10.14 8.92 7.6 8.22C8.61 6.88 10.2 6 12 6C15.03 6 17.5 8.47 17.5 11.5V12H19C19.7956 12 20.5587 12.3161 21.1213 12.8787C21.6839 13.4413 22 14.2044 22 15C22 15.7956 21.6839 16.5587 21.1213 17.1213C20.5587 17.6839 19.7956 18 19 18ZM19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.61 5.64 5.36 8.04C2.35 8.36 0 10.9 0 14C0 15.5913 0.632141 17.1174 1.75736 18.2426C2.88258 19.3679 4.4087 20 6 20H19C19.6566 20 20.3068 19.8707 20.9134 19.6194C21.52 19.3681 22.0712 18.9998 22.5355 18.5355C22.9998 18.0712 23.3681 17.52 23.6194 16.9134C23.8707 16.3068 24 15.6566 24 15C24 12.36 21.95 10.22 19.35 10.04Z" />
    </Svg>
  );
};
