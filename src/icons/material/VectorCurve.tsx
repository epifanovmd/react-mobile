import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorCurveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 2C18.8978 2 19.2794 2.15804 19.5607 2.43934C19.842 2.72064 20 3.10218 20 3.5C20 3.89782 19.842 4.27936 19.5607 4.56066C19.2794 4.84196 18.8978 5 18.5 5C18.27 5 18.05 4.95 17.85 4.85L14.16 8.55L14.5 9C16.69 7.74 19.26 7 22 7L23 7.03V9.04L22 9C19.42 9 17 9.75 15 11.04C15 11.56 14.8976 12.075 14.6986 12.5554C14.4996 13.0359 14.2079 13.4724 13.8401 13.8401C13.4724 14.2079 13.0359 14.4996 12.5554 14.6986C12.075 14.8976 11.56 15 11.04 15C9.75 17 9 19.42 9 22L9.04 23H7.03L7 22C7 19.26 7.74 16.69 9 14.5L8.55 14.16L4.85 17.85C4.95 18.05 5 18.27 5 18.5C5 18.8978 4.84196 19.2794 4.56066 19.5607C4.27936 19.842 3.89782 20 3.5 20C3.10218 20 2.72064 19.842 2.43934 19.5607C2.15804 19.2794 2 18.8978 2 18.5C2 18.1022 2.15804 17.7206 2.43934 17.4393C2.72064 17.158 3.10218 17 3.5 17C3.73 17 3.95 17.05 4.15 17.15L7.84 13.45C7.31 12.78 7 11.92 7 11C7 9.93913 7.42143 8.92172 8.17157 8.17157C8.92172 7.42143 9.93913 7 11 7C11.92 7 12.78 7.31 13.45 7.84L17.15 4.15C17.05 3.95 17 3.73 17 3.5C17 3.10218 17.158 2.72064 17.4393 2.43934C17.7206 2.15804 18.1022 2 18.5 2ZM11 9C10.4696 9 9.96086 9.21071 9.58579 9.58579C9.21071 9.96086 9 10.4696 9 11C9 11.5304 9.21071 12.0391 9.58579 12.4142C9.96086 12.7893 10.4696 13 11 13C11.5304 13 12.0391 12.7893 12.4142 12.4142C12.7893 12.0391 13 11.5304 13 11C13 10.4696 12.7893 9.96086 12.4142 9.58579C12.0391 9.21071 11.5304 9 11 9Z" />
    </Svg>
  );
};
