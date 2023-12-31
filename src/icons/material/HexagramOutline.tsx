import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HexagramOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 7L13.3 9.8L16.5 9.4L14.5 12L16.4 14.5L13.2 14.1L12 17L10.7 14.2L7.50005 14.6L9.50005 12L7.60005 9.5L10.8 9.9L12 7ZM12 2L9.50005 7.7L3.30005 7L7.00005 12L3.40005 17L9.60005 16.3L12 22L14.5 16.3L20.7001 16.9L17 12L20.6 7L14.4 7.7L12 2Z" />
    </Svg>
  );
};
