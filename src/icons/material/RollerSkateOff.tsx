import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RollerSkateOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.84 22.7305L18.95 20.8405C18.78 22.0605 17.75 23.0005 16.5 23.0005C15.1 23.0005 14 21.8805 14 20.5005C14 19.2405 14.93 18.2005 16.14 18.0305L15.11 17.0005H2.99999V4.90047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM8.99999 5.00047H11.5V2.00047H5.19999L8.49999 5.32047C8.58999 5.13047 8.76999 5.00047 8.99999 5.00047ZM12.56 9.36047C12.18 9.00047 11.9 8.50047 11.82 8.00047H11.2L12.56 9.36047ZM19.5 12.9505C18.55 10.9005 15.82 10.5605 13.91 10.0505C13.45 10.0305 13 9.77047 12.6 9.40047L20 16.7905C20 15.4505 20.06 13.7605 19.5 12.9505ZM9.19999 6.00047L10.2 7.00047H11.5V6.00047H9.19999ZM6.49999 18.0005C5.09999 18.0005 3.99999 19.1205 3.99999 20.5005C3.99999 21.8805 5.09999 23.0005 6.49999 23.0005C7.89999 23.0005 8.99999 21.8805 8.99999 20.5005C8.99999 19.1205 7.85999 18.0005 6.49999 18.0005Z" />
    </Svg>
  );
};
