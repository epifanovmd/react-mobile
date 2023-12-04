import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThermometerOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.0001 7.80047L9.00011 5.80047V5.00047C9.00011 3.34047 10.3401 2.00047 12.0001 2.00047C13.6601 2.00047 15.0001 3.34047 15.0001 5.00047V11.8005L11.2001 8.00047H13.0001V5.00047C13.0001 4.45047 12.5501 4.00047 12.0001 4.00047C11.4501 4.00047 11.0001 4.45047 11.0001 5.00047V7.80047ZM22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L9.00011 10.8905V13.0005C6.79011 14.6605 6.34011 17.7905 8.00011 20.0005C9.66011 22.2105 12.7901 22.6605 15.0001 21.0005C15.8401 20.3705 16.4001 19.5005 16.7101 18.6005L20.8401 22.7305L22.1101 21.4605Z" />
    </Svg>
  );
};
