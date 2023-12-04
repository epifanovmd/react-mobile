import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BrightnessPercentIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.0399 8.70994V3.99994H15.3399L11.9999 0.689941L8.70994 3.99994H3.99994V8.70994L0.689941 11.9999L3.99994 15.3399V20.0399H8.70994L11.9999 23.3499L15.3399 20.0399H20.0399V15.3399L23.3499 11.9999L20.0399 8.70994ZM8.82994 7.04994C9.80994 7.04994 10.5999 7.83994 10.5999 8.82994C10.5999 9.29937 10.4135 9.74958 10.0815 10.0815C9.74958 10.4135 9.29937 10.5999 8.82994 10.5999C7.83994 10.5999 7.04994 9.80994 7.04994 8.82994C7.04994 7.83994 7.83994 7.04994 8.82994 7.04994ZM15.2199 16.9999C14.2399 16.9999 13.4499 16.1999 13.4499 15.2199C13.4499 14.7505 13.6364 14.3003 13.9684 13.9684C14.3003 13.6364 14.7505 13.4499 15.2199 13.4499C16.1999 13.4499 16.9999 14.2399 16.9999 15.2199C16.9999 15.692 16.8124 16.1448 16.4786 16.4786C16.1448 16.8124 15.692 16.9999 15.2199 16.9999ZM8.49994 17.0299L6.99994 15.5299L15.5299 6.99994L17.0299 8.49994L8.49994 17.0299Z" />
    </Svg>
  );
};
