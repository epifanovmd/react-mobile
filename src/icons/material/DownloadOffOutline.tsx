import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DownloadOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L7.11011 9.00047H5.00011L12.0001 16.0005L13.0601 14.9505L16.1101 18.0005H5.00011V20.0005H18.1101L20.8401 22.7305L22.1101 21.4605ZM11.0001 5.00047H13.0001V9.80047L15.6001 12.4005L19.0001 9.00047H15.0001V3.00047H9.00011V5.80047L11.0001 7.80047V5.00047Z" />
    </Svg>
  );
};
