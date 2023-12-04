import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BrightnessAutoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.2999 15.9999L13.5999 13.9999H10.3999L9.69994 15.9999H7.79994L10.9999 6.99994H12.9999L16.1999 15.9999H14.2999ZM19.9999 8.68994V3.99994H15.3099L11.9999 0.689941L8.68994 3.99994H3.99994V8.68994L0.689941 11.9999L3.99994 15.3099V19.9999H8.68994L11.9999 23.3099L15.3099 19.9999H19.9999V15.3099L23.3099 11.9999L19.9999 8.68994ZM10.8499 12.6499H13.1499L11.9999 8.99994L10.8499 12.6499Z" />
    </Svg>
  );
};
