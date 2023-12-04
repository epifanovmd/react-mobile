import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CylinderOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.64011 4.44047L6.03011 2.83047C8.15011 2.10047 10.8201 2.00047 12.0001 2.00047C14.1101 2.00047 21.0001 2.29047 21.0001 6.00047V17.8005L18.0601 14.8605C18.3901 14.9705 18.7001 15.1005 19.0001 15.2505V8.75047C17.2801 9.63047 14.8201 9.89047 13.1701 9.97047L11.1801 8.00047C11.4501 8.00047 11.7201 8.00047 12.0001 8.00047C15.8701 8.00047 19.0001 7.11047 19.0001 6.00047C19.0001 4.89047 15.8701 4.00047 12.0001 4.00047C10.3501 4.00047 8.84011 4.17047 7.64011 4.44047ZM22.1101 21.4605L20.8401 22.7305L18.9101 20.8005C16.7001 21.8705 13.3601 22.0005 12.0001 22.0005C9.89011 22.0005 3.00011 21.7105 3.00011 18.0005V6.00047C3.00011 5.66047 3.08011 5.36047 3.18011 5.07047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM5.00011 15.2505C7.20011 14.1305 10.6201 14.0005 12.0001 14.0005H12.1101L7.73011 9.62047C6.76011 9.43047 5.80011 9.15047 5.00011 8.75047V15.2505ZM17.3901 19.2805L14.2101 16.1005C13.5001 16.0405 12.7801 16.0005 12.0001 16.0005C8.13011 16.0005 5.00011 16.9005 5.00011 18.0005C5.00011 19.1005 8.13011 20.0005 12.0001 20.0005C14.1701 20.0005 16.1001 19.7205 17.3901 19.2805Z" />
    </Svg>
  );
};
