import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 6C20.58 6 21.05 6.2 21.42 6.59C21.8 7 22 7.45 22 8V19C22 19.55 21.8 20 21.42 20.41C21.05 20.8 20.58 21 20 21H4C3.42 21 2.95 20.8 2.58 20.41C2.2 20 2 19.55 2 19V8C2 7.45 2.2 7 2.58 6.59C2.95 6.2 3.42 6 4 6H8V4C8 3.42 8.2 2.95 8.58 2.58C8.95 2.2 9.42 2 10 2H14C14.58 2 15.05 2.2 15.42 2.58C15.8 2.95 16 3.42 16 4V6H20ZM4 8V19H20V8H4ZM14 6V4H10V6H14Z" />
    </Svg>
  );
};
