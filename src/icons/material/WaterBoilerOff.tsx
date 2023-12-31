import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterBoilerOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.0001 6.82047L6.25011 3.05047C6.59011 2.42047 7.24011 2.00047 8.00011 2.00047H16.0001C17.1101 2.00047 18.0001 2.89047 18.0001 4.00047V14.8005L12.1601 8.96047C13.1901 8.87047 14.0001 8.00047 14.0001 6.97047C14.0001 5.87047 13.1101 4.97047 12.0001 4.97047C10.9501 4.97047 10.1001 5.78047 10.0001 6.82047ZM15.0001 18.0005V20.0005H18.0001V22.0005H15.0001C13.8901 22.0005 13.0001 21.1105 13.0001 20.0005V18.0005H11.0001V20.0005C11.0001 21.1105 10.1101 22.0005 9.00011 22.0005H6.00011V20.0005H9.00011V18.0005H8.00011C6.89011 18.0005 6.00011 17.1105 6.00011 16.0005V7.89047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305L16.1001 18.0005C16.0601 18.0005 16.0301 18.0005 16.0001 18.0005H15.0001ZM14.0001 16.0005V15.8905L12.6101 14.5005H10.0001V16.0005H14.0001Z" />
    </Svg>
  );
};
