import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShoeSneakerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 15.0005C2 15.0005 2 12.0005 4 12.0005C4.68 12.0005 5.46 11.9505 6.28 11.8205C7.2 12.5405 8.5 13.0005 10 13.0005H10.25L8.56 11.2905C8.91 11.1805 9.25 11.0505 9.59 10.9105L11.5 12.8205C11.89 12.7405 12.25 12.6305 12.58 12.5005L10.55 10.4505C10.85 10.2805 11.14 10.1105 11.43 9.91047L13.5 12.0005C13.8 11.7905 14.04 11.5605 14.25 11.3205L12.22 9.29047C12.46 9.07047 12.7 8.83047 12.92 8.58047L14.79 10.4505C14.91 10.1405 15 9.83047 15 9.50047C15 8.65047 14.55 7.89047 13.84 7.28047C13.89 7.19047 13.95 7.10047 14 7.00047L15.53 6.23047C16.38 7.17047 18.14 7.84047 20.25 7.97047L20.3 8.00047H21C21 8.00047 22 9.00047 22 12.5005C22 13.0705 22 13.5705 21.96 14.0005H19C17.9 14.0005 16.58 14.2605 15.3 14.5005C14.12 14.7605 12.9 15.0005 12 15.0005H2ZM21 17.0005C21 17.0005 21.58 17.0005 21.86 15.0005H19C17 15.0005 14 16.0005 12 16.0005H2.28C2.62 16.6005 3.26 17.0005 4 17.0005H21Z" />
    </Svg>
  );
};
