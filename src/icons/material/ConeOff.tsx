import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ConeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.5001 7.31047L9.06011 5.86047L11.1501 2.47047C11.3401 2.16047 11.6701 2.00047 12.0001 2.00047C12.3301 2.00047 12.6601 2.16047 12.8501 2.50047L21.6201 16.6805C21.9101 17.1505 22.0001 17.6105 22.0001 18.0005C22.0001 18.2505 21.9601 18.5005 21.9001 18.7005L17.7301 14.5305C17.8101 14.5505 17.9001 14.5605 18.0001 14.5805L12.0001 4.90047L10.5001 7.31047ZM22.1101 21.4605L20.8401 22.7305L19.1701 21.0605C17.0301 21.8305 14.1101 22.0005 12.0001 22.0005C3.30011 22.0005 2.00011 19.5005 2.00011 18.0005C2.00011 17.5005 2.15011 17.0405 2.40011 16.6505H2.38011L7.11011 9.00047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM6.00011 14.6005C7.96011 14.1205 10.2501 14.0005 12.0001 14.0005H12.1101L8.56011 10.4505L6.00011 14.6005ZM17.5501 19.4405L14.1901 16.0805C13.5001 16.0305 12.7601 16.0005 12.0001 16.0005C7.58011 16.0005 4.00011 16.9005 4.00011 18.0005C4.00011 19.1005 7.58011 20.0005 12.0001 20.0005C14.1601 20.0005 16.1101 19.7905 17.5501 19.4405Z" />
    </Svg>
  );
};
