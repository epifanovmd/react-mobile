import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PlusCircleMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 12C2 9.2 3.6 6.8 6 5.7V3.5C2.5 4.8 0 8.1 0 12C0 15.9 2.5 19.2 6 20.5V18.3C3.6 17.2 2 14.8 2 12ZM15 3C10 3 6 7 6 12C6 17 10 21 15 21C20 21 24 17 24 12C24 7 20 3 15 3ZM20 13H16V17H14V13H10V11H14V7H16V11H20V13Z" />
    </Svg>
  );
};
