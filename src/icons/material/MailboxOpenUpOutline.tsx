import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MailboxOpenUpOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 12.8496V6.84961H18V8.84961H16V12.8496H14ZM18 3.84961H8C6.67392 3.84961 5.40215 4.37639 4.46447 5.31408C3.52678 6.25176 3 7.52353 3 8.84961V17.8496H1V19.8496H21C21.5304 19.8496 22.0391 19.6389 22.4142 19.2638C22.7893 18.8888 23 18.38 23 17.8496V8.84961C23 8.193 22.8707 7.54282 22.6194 6.93619C22.3681 6.32956 21.9998 5.77837 21.5355 5.31408C21.0712 4.84978 20.52 4.48149 19.9134 4.23021C19.3068 3.97894 18.6566 3.84961 18 3.84961ZM11 17.8496H5V8.84961C5 8.05396 5.31607 7.2909 5.87868 6.72829C6.44129 6.16568 7.20435 5.84961 8 5.84961C8.79565 5.84961 9.55871 6.16568 10.1213 6.72829C10.6839 7.2909 11 8.05396 11 8.84961V17.8496ZM21 17.8496H13V8.84961C13 7.75961 12.65 6.70961 12 5.84961H18C18.7956 5.84961 19.5587 6.16568 20.1213 6.72829C20.6839 7.2909 21 8.05396 21 8.84961V17.8496Z" />
    </Svg>
  );
};
