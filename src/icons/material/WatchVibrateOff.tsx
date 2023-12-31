import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WatchVibrateOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M0 9.00047H2V15.0005H0V9.00047ZM12 7.50047C14.47 7.50047 16.47 9.53047 16.46 12.0005C16.45 12.3805 16.4 12.7605 16.3 13.1305L17.5 14.3105C17.81 13.5805 18 12.8005 18 12.0005C18 10.1705 17.16 8.44047 15.72 7.31047L15 3.00047H9L8.59 5.39047L10.86 7.66047C11.23 7.55047 11.61 7.50047 12 7.50047ZM21 17.0005V7.00047H19V15.8005L20.2 17.0005H21ZM16.5 15.8605L22.11 21.4605L20.84 22.7305L15.55 17.4405L15 21.0005H9L8.27 16.7205C5.85 14.8205 5.27 11.4005 6.91 8.80047L1.11 3.00047L2.39 1.73047L8.09 7.44047L9.17 8.50047L15.44 14.7905L16.5 15.8605ZM14.05 15.9405L8.05 9.94047C7.7 10.5705 7.5 11.2805 7.5 12.0005C7.5 14.4705 9.53 16.4705 12 16.4605C12.72 16.4605 13.42 16.2805 14.05 15.9405ZM22 9.00047V15.0005H24V9.00047H22ZM3 17.0005H5V7.00047H3V17.0005Z" />
    </Svg>
  );
};
