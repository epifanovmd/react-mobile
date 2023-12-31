import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VibrateOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.2 5.00047L6.55 3.35047C6.81 3.12047 7.15 3.00047 7.5 3.00047H16.5C16.8978 3.00047 17.2794 3.1585 17.5607 3.43981C17.842 3.72111 18 4.10264 18 4.50047V14.8005L16 12.8005V5.00047H8.2ZM0 15.0005H2V9.00047H0V15.0005ZM21 17.0005V7.00047H19V15.8005L20.2 17.0005H21ZM3 17.0005H5V7.00047H3V17.0005ZM18 17.3505L22.11 21.4605L20.84 22.7305L18 19.8505C17.83 20.5405 17.21 21.0005 16.5 21.0005H7.5C7.10218 21.0005 6.72064 20.8424 6.43934 20.5611C6.15804 20.2798 6 19.8983 6 19.5005V7.89047L1.11 3.00047L2.39 1.73047L6.09 5.44047L8 7.34047L16 15.3405L18 17.3405V17.3505ZM16 17.8905L8 9.89047V19.0005H16V17.8905ZM22 9.00047V15.0005H24V9.00047H22Z" />
    </Svg>
  );
};
