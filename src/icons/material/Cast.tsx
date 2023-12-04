import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 10V12C2.1819 12 3.35222 12.2328 4.44415 12.6851C5.53608 13.1374 6.52823 13.8003 7.36396 14.636C8.19969 15.4718 8.86262 16.4639 9.31492 17.5558C9.76721 18.6478 10 19.8181 10 21H12C12 14.92 7.07 10 1 10ZM1 14V16C1.65661 16 2.30679 16.1293 2.91342 16.3806C3.52005 16.6319 4.07124 17.0002 4.53553 17.4645C4.99983 17.9288 5.36812 18.48 5.6194 19.0866C5.87067 19.6932 6 20.3434 6 21H8C8 19.1435 7.2625 17.363 5.94975 16.0503C4.63699 14.7375 2.85652 14 1 14ZM1 18V21H4C4 20.2044 3.68393 19.4413 3.12132 18.8787C2.55871 18.3161 1.79565 18 1 18ZM21 3H3C1.89 3 1 3.89 1 5V8H3V5H21V19H14V21H21C21.5304 21 22.0391 20.7893 22.4142 20.4142C22.7893 20.0391 23 19.5304 23 19V5C23 3.89 22.1 3 21 3Z" />
    </Svg>
  );
};
