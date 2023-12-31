import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LineScanIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 22V20H20V17H22V20.5C22 20.9 21.8 21.2 21.5 21.5C21.2 21.8 20.8 22 20.5 22H17ZM7 22H3.5C3.1 22 2.8 21.8 2.5 21.5C2.2 21.2 2 20.8 2 20.5V17H4V20H7V22ZM17 2H20.5C20.9 2 21.2 2.2 21.5 2.5C21.8 2.8 22 3.1 22 3.5V7H20V4H17V2ZM7 2V4H4V7H2V3.5C2 3.1 2.2 2.8 2.5 2.5C2.8 2.2 3.1 2 3.5 2H7ZM19 11H5V13H19V11Z" />
    </Svg>
  );
};
