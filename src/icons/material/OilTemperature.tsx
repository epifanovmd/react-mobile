import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OilTemperatureIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.0001 5H13.0001V3H10.0001V2C10.0001 1.4 9.6001 1 9.0001 1C8.4001 1 8.0001 1.4 8.0001 2V15.3C7.4001 15.6 7.0001 16.3 7.0001 17C7.0001 18.1 7.9001 19 9.0001 19C10.1001 19 11.0001 18.1 11.0001 17C11.0001 16.3 10.6001 15.6 10.0001 15.3V13H13.0001V11H10.0001V9H13.0001V7H10.0001V5ZM22.0001 17.5C22.0001 17.5 24.0001 19.7 24.0001 21C24.0001 22.1 23.1001 23 22.0001 23C20.9001 23 20.0001 22.1 20.0001 21C20.0001 19.7 22.0001 17.5 22.0001 17.5ZM22.9001 15.5C22.6001 16 22.0001 16.1 21.5001 15.9L19.4001 14.7L15.8001 21C15.5001 21.6 14.8001 22 14.0001 22H5.0001C3.9001 22 3.0001 21.1 3.0001 20V17C3.0001 15.9 3.9001 15 5.0001 15V20H14.0001L16.1001 16.4L13.0001 18.2V15.8L19.2001 12.2L22.5001 14.1C23.0001 14.4 23.1001 15 22.9001 15.5ZM3.5001 13.9L1.8001 15.6C1.4001 16 0.800098 16 0.400098 15.6C9.76622e-05 15.2 9.76622e-05 14.6 0.400098 14.2L2.1001 12.5C2.5001 12.1 3.1001 12.1 3.5001 12.5C3.9001 12.9 3.9001 13.5 3.5001 13.9Z" />
    </Svg>
  );
};
