import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HockeySticksIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.68 4H14.3L12.56 8C12.53 8.04 12.45 8.22 12.31 8.5C12.17 8.78 12.06 9.04 12 9.19L9.7 4H6.32L10.41 12.84C10.5 13.06 10.73 13.59 11.11 14.43C11.5 15.28 11.78 15.91 12 16.35L13.41 19.44C13.6 19.78 13.89 19.95 14.3 19.95L19 20V16H15L13.6 12.84L17.68 4ZM20.03 16V20H22V17C22 16.73 21.91 16.5 21.72 16.28C21.53 16.08 21.3 16 21 16H20.03ZM5 16V20L9.7 19.95C10.11 19.95 10.4 19.78 10.59 19.44L11.44 17.5L9.84 14.06L9 16H5ZM2 20H3.97V16H3C2.7 16 2.47 16.08 2.28 16.28C2.09 16.5 2 16.73 2 17V20Z" />
    </Svg>
  );
};
