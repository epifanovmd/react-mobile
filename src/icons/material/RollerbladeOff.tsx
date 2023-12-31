import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RollerbladeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.84 22.7305L20.32 22.2105C19.86 22.6905 19.22 23.0005 18.5 23.0005C17.12 23.0005 16 21.8805 16 20.5005C16 19.7805 16.31 19.1405 16.79 18.6805L15.11 17.0005H2.99999V4.90047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM19.5 12.9505C18.55 10.9005 15.82 10.5605 13.91 10.0505C13.45 10.0305 13 9.77047 12.6 9.40047L20 16.7905C20 15.4505 20.06 13.7605 19.5 12.9505ZM9.19999 6.00047L10.2 7.00047H11.5V6.00047H9.19999ZM12.56 9.36047C12.18 9.00047 11.9 8.50047 11.82 8.00047H11.2L12.56 9.36047ZM11.5 18.0005C10.12 18.0005 8.99999 19.1205 8.99999 20.5005C8.99999 21.8805 10.12 23.0005 11.5 23.0005C12.88 23.0005 14 21.8805 14 20.5005C14 19.1205 12.88 18.0005 11.5 18.0005ZM8.99999 5.00047H11.5V2.00047H5.19999L8.49999 5.32047C8.58999 5.13047 8.76999 5.00047 8.99999 5.00047ZM4.49999 18.0005C3.11999 18.0005 1.99999 19.1205 1.99999 20.5005C1.99999 21.8805 3.11999 23.0005 4.49999 23.0005C5.87999 23.0005 6.99999 21.8805 6.99999 20.5005C6.99999 19.1205 5.87999 18.0005 4.49999 18.0005Z" />
    </Svg>
  );
};
