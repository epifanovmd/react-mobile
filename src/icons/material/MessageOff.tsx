import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MessageOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.95 17.7505L5.19999 2.00047H20C21.1 2.00047 22 2.89047 22 4.00047V16.0005C22 16.7605 21.57 17.4105 20.95 17.7505ZM2.38999 1.73047L1.10999 3.00047L1.99999 3.90047C1.99999 3.93047 1.99999 3.97047 1.99999 4.00047V22.0005L5.99999 18.0005H16.11L20.84 22.7305L22.11 21.4605L2.38999 1.73047Z" />
    </Svg>
  );
};
