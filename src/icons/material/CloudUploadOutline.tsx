import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudUploadOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 15.5913 0.632141 17.1174 1.75736 18.2426C2.88258 19.3679 4.4087 20 6 20H19C19.6566 20 20.3068 19.8707 20.9134 19.6194C21.52 19.3681 22.0712 18.9998 22.5355 18.5355C22.9998 18.0712 23.3681 17.52 23.6194 16.9134C23.8707 16.3068 24 15.6566 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C4.93913 18 3.92172 17.5786 3.17157 16.8284C2.42143 16.0783 2 15.0609 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 15.7956 21.6839 16.5587 21.1213 17.1213C20.5587 17.6839 19.7956 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z" />
    </Svg>
  );
};
