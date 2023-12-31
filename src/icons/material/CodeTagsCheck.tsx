import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CodeTagsCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.59 3.41016L2 8.00016L6.59 12.6002L8 11.1802L4.82 8.00016L8 4.82016L6.59 3.41016ZM12.41 3.41016L11 4.82016L14.18 8.00016L11 11.1802L12.41 12.6002L17 8.00016L12.41 3.41016ZM21.59 11.5902L13.5 19.6802L9.83 16.0002L8.42 17.4102L13.5 22.5002L23 13.0002L21.59 11.5902Z" />
    </Svg>
  );
};
