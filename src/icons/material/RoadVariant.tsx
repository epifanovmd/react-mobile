import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RoadVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.1 4.8C18 4.3 17.6 4 17.1 4H13L13.2 7H10.8L11 4H6.79996C6.29996 4 5.89996 4.4 5.79996 4.8L3.09996 18.8C2.99996 19.4 3.49996 20 4.09996 20H9.99996L10.3 15H13.7L14 20H19.8C20.4 20 20.9 19.4 20.8 18.8L18.1 4.8ZM10.4 13L10.6 9H13.2L13.4 13H10.4Z" />
    </Svg>
  );
};
