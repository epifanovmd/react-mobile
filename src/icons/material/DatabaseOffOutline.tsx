import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.38999 1.73047L1.10999 3.00047L4.20999 6.10047C4.07999 6.39047 3.99999 6.69047 3.99999 7.00047V17.0005C3.99999 19.2105 7.58999 21.0005 12 21.0005C14.3 21.0005 16.38 20.5005 17.84 19.7305L20.84 22.7305L22.11 21.4605L2.38999 1.73047ZM5.99999 9.64047C6.75998 10.0705 7.69999 10.4205 8.75999 10.6505L12.11 14.0005C12.07 14.0005 12.04 14.0005 12 14.0005C9.57999 14.0005 7.29998 13.4005 5.99999 12.4505V9.64047ZM12 19.0005C8.12999 19.0005 5.99999 17.5005 5.99999 17.0005V14.7705C7.60999 15.5505 9.71999 16.0005 12 16.0005C12.68 16.0005 13.34 15.9505 14 15.8705L16.34 18.2305C15.33 18.6505 13.87 19.0005 12 19.0005ZM8.63999 5.44047L7.05999 3.86047C8.41999 3.33047 10.13 3.00047 12 3.00047C16.42 3.00047 20 4.79047 20 7.00047V16.8005L18 14.8005V14.7705V14.7805L16.45 13.2505C17.05 13.0305 17.58 12.7605 18 12.4505V9.64047C16.97 10.2205 15.61 10.6505 14.06 10.8605L12.19 9.00047C15.94 8.94047 18 7.50047 18 7.00047C18 6.50047 15.87 5.00047 12 5.00047C10.66 5.00047 9.53999 5.18047 8.63999 5.44047Z" />
    </Svg>
  );
};
