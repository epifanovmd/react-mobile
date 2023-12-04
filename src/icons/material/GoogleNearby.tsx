import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleNearbyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.3599 10.4604L13.5399 2.64043C12.6899 1.79043 11.3099 1.79043 10.4599 2.64043L2.63994 10.4604C1.78994 11.3104 1.78994 12.6904 2.63994 13.5404L10.4599 21.3604C11.3099 22.2104 12.6899 22.2104 13.5399 21.3604L21.3599 13.5404C22.2099 12.6904 22.2099 11.3104 21.3599 10.4604ZM11.9999 19.0004L4.99994 12.0004L11.9999 5.00043L18.9999 12.0004L11.9999 19.0004ZM16.4999 12.0004L11.9999 16.5004L7.49994 12.0004L11.9999 7.50043L16.4999 12.0004Z" />
    </Svg>
  );
};
