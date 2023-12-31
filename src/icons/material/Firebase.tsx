import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FirebaseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 18.6904L12.7 22.7404C12.2 23.0004 11.7 23.0004 11.2 22.7404L4 18.6904L17.05 5.54043L17.4 5.44043C17.7 5.44043 17.87 5.57043 17.9 5.84043L20 18.6904ZM9.35 5.74043L4.8 13.2904L6.7 1.34043C6.73 1.07043 6.9 0.94043 7.2 0.94043C7.4 0.94043 7.53 1.00043 7.6 1.19043L9.75 5.14043L9.35 5.74043ZM13.85 7.00043L4.3 16.5904L11.55 4.29043C11.65 4.09043 11.8 4.00043 12 4.00043C12.2 4.00043 12.33 4.09043 12.4 4.29043L13.85 7.00043Z" />
    </Svg>
  );
};
