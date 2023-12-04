import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GlassCocktailOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.33 12.6705L7.65999 7.00047L6.12999 5.47047L2.38999 1.73047L1.10999 3.00047L2.99999 4.89047V5.00047L11 13.0005V19.0005H5.99999V21.0005H18V19.8905L20.84 22.7305L22.11 21.4605L13.33 12.6705ZM13 19.0005V14.8905L17.11 19.0005H13ZM8.19999 5.00047L6.19999 3.00047H21V5.00047L14.6 11.4005L10.2 7.00047H16.5L18.5 5.00047H8.19999Z" />
    </Svg>
  );
};
