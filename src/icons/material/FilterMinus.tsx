import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterMinusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 12V19.88C12.0401 20.18 11.9401 20.5 11.7101 20.71C11.3201 21.1 10.6901 21.1 10.3001 20.71L8.2901 18.7C8.0601 18.47 7.9601 18.16 8.0001 17.86V12H7.9701L2.2101 4.62C1.8701 4.19 1.9501 3.56 2.3801 3.22C2.5701 3.08 2.7801 3 3.0001 3H17.0001C17.2201 3 17.4301 3.08 17.6201 3.22C18.0501 3.56 18.1301 4.19 17.7901 4.62L12.0301 12H12.0001ZM15.0001 17H23.0001V19H15.0001V17Z" />
    </Svg>
  );
};
