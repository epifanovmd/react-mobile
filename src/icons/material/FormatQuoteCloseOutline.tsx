import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatQuoteCloseOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.9999 6V14H14.8799L12.8799 18H18.6199L20.9999 13.24V6H12.9999ZM14.9999 8H18.9999V12.76L17.3799 16H16.1199L18.1199 12H14.9999V8ZM2.99988 6V14H4.87988L2.87988 18H8.61988L10.9999 13.24V6H2.99988ZM4.99988 8H8.99988V12.76L7.37988 16H6.11988L8.11988 12H4.99988V8Z" />
    </Svg>
  );
};
