import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PanoramaVerticalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 12C18.5 8.1 19.3 5.1 19.9 3.3C20.1 2.7 19.7 2 19 2H5.00005C4.30005 2 3.80005 2.7 4.10005 3.3C4.70005 5.4 5.50005 8.1 5.50005 12C5.50005 15.9 4.70005 18.7 4.10005 20.7C3.80005 21.3 4.30005 22 5.00005 22H19C19.7 22 20.2 21.3 20 20.7C19.3 18.7 18.5 15.9 18.5 12Z" />
    </Svg>
  );
};
