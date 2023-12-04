import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountFilterOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 21L18.8 22.8C19.3 23.3 20 22.9 20 22.3V18L22.8 14.6C23.3 13.9 22.8 13 22 13H15C14.2 13 13.7 14 14.2 14.6L17 18V21ZM15 20H2V17C2 14.3 7.3 13 10 13C10.6 13 11.3 13.1 12.1 13.2C11.9 13.8 12 14.5 12.2 15.1C11.5 15 10.7 14.9 10 14.9C7 14.9 3.9 16.4 3.9 17V18.1H14.5L15 18.7V20ZM10 12C12.2 12 14 10.2 14 8C14 5.8 12.2 4 10 4C7.8 4 6 5.8 6 8C6 10.2 7.8 12 10 12ZM10 6C11.1 6 12 6.9 12 8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8C8 6.9 8.9 6 10 6Z" />
    </Svg>
  );
};
