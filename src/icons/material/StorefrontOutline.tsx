import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StorefrontOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.06006 3C4.63006 3 4.22006 3.14 3.84006 3.42C3.46006 3.7 3.24006 4.06 3.14006 4.5L2.11006 8.91C1.86006 10 2.06006 10.95 2.72006 11.77L3.00006 12.05V19C3.00006 19.5 3.20006 20 3.61006 20.39C4.02006 20.78 4.50006 21 5.00006 21H19.0001C19.5001 21 20.0001 20.8 20.3901 20.39C20.7801 19.98 21.0001 19.5 21.0001 19V12.05L21.2801 11.77C21.9401 10.95 22.1401 10 21.8901 8.91L20.8601 4.5C20.7301 4.06 20.5001 3.7 20.1301 3.42C19.7701 3.14 19.3801 3 18.9401 3H5.06006ZM18.8901 4.97L19.9701 9.38C20.0601 9.81 19.9701 10.2 19.6901 10.55C19.4401 10.86 19.1301 11 18.7501 11C18.4401 11 18.1701 10.9 17.9501 10.66C17.7301 10.43 17.6101 10.16 17.5801 9.84L16.9701 5L18.8901 4.97ZM5.06006 5H7.03006L6.42006 9.84C6.30006 10.63 5.91006 11 5.25006 11C4.84006 11 4.53006 10.86 4.31006 10.55C4.03006 10.2 3.94006 9.81 4.03006 9.38L5.06006 5ZM9.05006 5H11.0001V9.7C11.0001 10.05 10.8901 10.35 10.6401 10.62C10.3901 10.88 10.0801 11 9.70006 11C9.36006 11 9.07006 10.88 8.84006 10.59C8.61006 10.3 8.50006 10 8.50006 9.66V9.5L9.05006 5ZM13.0001 5H14.9501L15.5001 9.5C15.5801 9.92 15.5001 10.27 15.2101 10.57C14.9501 10.87 14.6101 11 14.2001 11C13.8901 11 13.6101 10.88 13.3601 10.62C13.1101 10.35 13.0001 10.05 13.0001 9.7V5ZM7.45006 12.05C8.08006 12.67 8.86006 13 9.80006 13C10.6401 13 11.3801 12.67 12.0001 12.05C12.6901 12.67 13.4501 13 14.3001 13C15.1701 13 15.9201 12.67 16.5501 12.05C17.1101 12.67 17.8601 13 18.8001 13H19.0301V19H5.00006V13H5.25006C6.16006 13 6.89006 12.67 7.45006 12.05Z" />
    </Svg>
  );
};
