import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L7.64999 9.54047C6.73999 11.0305 5.99999 12.6505 5.99999 14.2305C5.99999 17.5405 8.68999 20.2305 12 20.2305C13.74 20.2305 15.3 19.5005 16.4 18.2905L20.84 22.7305L22.11 21.4605ZM12 18.2305C9.77999 18.2305 7.99999 16.4505 7.99999 14.2305C7.99999 13.5005 8.49999 12.2705 9.13999 11.0305L15 16.8805C14.26 17.7105 13.2 18.2305 12 18.2305ZM11.14 7.94047L9.70999 6.50047C10.57 5.38047 11.25 4.61047 11.25 4.61047L12 3.77047L12.75 4.61047C12.75 4.61047 14.03 6.06047 15.32 7.94047C16.61 9.82047 18 12.0705 18 14.2305C18 14.4105 18 14.5905 17.97 14.7705L15.46 12.2605C15 11.2305 14.37 10.0705 13.68 9.07047C12.84 7.85047 12.44 7.42047 12 6.90047C11.73 7.21047 11.5 7.50047 11.14 7.94047Z" />
    </Svg>
  );
};
