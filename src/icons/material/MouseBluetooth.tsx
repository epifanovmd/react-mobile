import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MouseBluetoothIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 7.00031H20.5L23.35 9.85031L21.21 12.0003L23.35 14.1403L20.5 17.0003H20V13.2103L17.71 15.5003L17 14.7903L19.79 12.0003L17 9.21031L17.71 8.50031L20 10.7903V7.00031ZM21 8.91031V10.7903L21.94 9.85031L21 8.91031ZM21 13.2103V15.0803L21.94 14.1403L21 13.2103ZM15 9.00031V10.0003H9V2.07031C12.39 2.56031 15 5.47031 15 9.00031ZM1 10.0003V9.00031C1 5.47031 3.61 2.56031 7 2.07031V10.0003H1ZM15 15.0003C15 16.8568 14.2625 18.6373 12.9497 19.9501C11.637 21.2628 9.85652 22.0003 8 22.0003C6.14348 22.0003 4.36301 21.2628 3.05025 19.9501C1.7375 18.6373 1 16.8568 1 15.0003V12.0003H15V15.0003Z" />
    </Svg>
  );
};
