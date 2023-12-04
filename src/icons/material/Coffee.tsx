import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CoffeeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 21H20V19H2V21ZM20 8H18V5H20V8ZM20 3H4V13C4 14.0609 4.42143 15.0783 5.17157 15.8284C5.92172 16.5786 6.93913 17 8 17H14C15.0609 17 16.0783 16.5786 16.8284 15.8284C17.5786 15.0783 18 14.0609 18 13V10H20C20.5304 10 21.0391 9.78929 21.4142 9.41421C21.7893 9.03914 22 8.53043 22 8V5C22 3.89 21.1 3 20 3Z" />
    </Svg>
  );
};
