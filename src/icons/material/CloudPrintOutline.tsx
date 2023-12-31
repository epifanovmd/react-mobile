import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudPrintOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 16C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13C22 12.2044 21.6839 11.4413 21.1213 10.8787C20.5587 10.3161 19.7956 10 19 10H17.5V9.5C17.5 8.04131 16.9205 6.64236 15.8891 5.61091C14.8576 4.57946 13.4587 4 12 4C9.5 4 7.37 5.69 6.71 8H6C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12C2 13.0609 2.42143 14.0783 3.17157 14.8284C3.92172 15.5786 4.93913 16 6 16V11H18V16H19ZM19.36 8.04C21.95 8.22 24 10.36 24 13C24 13.6566 23.8707 14.3068 23.6194 14.9134C23.3681 15.52 22.9998 16.0712 22.5355 16.5355C22.0712 16.9998 21.52 17.3681 20.9134 17.6194C20.3068 17.8707 19.6566 18 19 18H18V22H6V18C4.4087 18 2.88258 17.3679 1.75736 16.2426C0.632141 15.1174 0 13.5913 0 12C0 8.91 2.34 6.36 5.35 6.04C6.6 3.64 9.11 2 12 2C15.64 2 18.67 4.6 19.36 8.04ZM8 13V20H16V13H8ZM9 18H15V19H9V18ZM15 17H9V16H15V17ZM9 14H15V15H9V14Z" />
    </Svg>
  );
};
