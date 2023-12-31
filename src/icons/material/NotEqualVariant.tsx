import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NotEqualVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.08 4.60938L15.92 5.39937L14.8 7.99937H19V9.99937H13.95L12.23 13.9994H19V15.9994H11.38L9.92 19.3994L8.08 18.6094L9.2 15.9994H5V13.9994H10.06L11.77 9.99937H5V7.99937H12.63L14.08 4.60938Z" />
    </Svg>
  );
};
