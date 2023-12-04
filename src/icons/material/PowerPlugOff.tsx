import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerPlugOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L15.3101 17.2005L14.5001 18.0005V21.0005H9.50011V18.0005L6.00011 14.5005V9.00047C6.00011 8.70047 6.10011 8.41047 6.25011 8.14047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM18.0001 14.5005V9.00047C18.0001 8.00047 17.0001 7.00047 16.0001 7.00047V3.00047H14.0001V7.00047H10.2001L17.8501 14.6505L18.0001 14.5005ZM10.0001 3.00047H8.00011V4.80047L10.0001 6.80047V3.00047Z" />
    </Svg>
  );
};
