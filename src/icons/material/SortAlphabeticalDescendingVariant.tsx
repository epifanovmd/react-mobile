import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SortAlphabeticalDescendingVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.7499 19L12.4999 22.25L9.24991 19H15.7499ZM8.88991 14.3H5.99991L5.27991 17H2.90991L5.99991 7H8.99991L12.1299 17H9.66991L8.88991 14.3ZM6.32991 12.68H8.55991L7.92991 10.56L7.66991 9.59L7.41991 8.63H7.38991L7.16991 9.6L6.92991 10.58L6.32991 12.68ZM13.0499 17V15.74L17.7999 8.97V8.91H13.4999V7H20.7299V8.34L16.0899 15V15.08H20.7999V17H13.0499Z" />
    </Svg>
  );
};
