import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L7.08999 9.00047C5.65999 10.3605 4.87999 12.4705 4.99999 14.4705C5.05999 14.9705 5.11999 15.4705 5.28999 15.9705C5.42999 16.5705 5.69999 17.1705 5.99999 17.7005C7.07999 19.4305 8.94999 20.6705 10.96 20.9205C13.1 21.1905 15.39 20.8005 17.03 19.3205C17.1 19.2605 17.15 19.1805 17.22 19.1105L20.84 22.7305L22.11 21.4605ZM8.79999 14.0505C8.56999 14.1505 8.32999 14.0905 8.13999 13.9305C8.07999 13.8805 8.03999 13.8305 7.99999 13.7605C6.99999 12.4705 6.73999 10.6905 7.25999 9.15047L8.57999 10.4705C8.57999 11.4005 8.72998 12.3305 9.06998 13.2205C9.10998 13.3205 9.14999 13.4205 9.14999 13.5505C9.14999 13.7705 8.99999 13.9705 8.79999 14.0505ZM14.5 17.5005C14.22 17.7405 13.76 18.0005 13.4 18.1005C12.28 18.5005 11.16 17.9405 10.5 17.2805C11.69 17.0005 12.4 16.1205 12.61 15.2305C12.66 15.0005 12.66 14.7605 12.64 14.5305L15 16.8805C14.85 17.1105 14.69 17.3305 14.5 17.5005ZM18.92 15.7205L9.64999 6.46047C10.12 5.65047 10.72 4.92047 11.46 4.32047C12.17 3.75047 13 3.23047 13.95 3.00047C13 4.85047 13.33 7.26047 14.82 8.72047C15.46 9.35047 16.22 9.78047 16.89 10.3805C17.15 10.6405 17.43 10.9005 17.66 11.2005C17.66 11.2005 18.22 12.0005 18.43 12.4605L18.56 12.7205C18.96 13.6905 19.06 14.7205 18.92 15.7205Z" />
    </Svg>
  );
};
