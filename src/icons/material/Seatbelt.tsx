import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeatbeltIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 2C13.1101 2 14.0001 2.9 14.0001 4C14.0001 5.11 13.1101 6 12.0001 6C11.4696 6 10.9609 5.78929 10.5858 5.41421C10.2108 5.03914 10.0001 4.53043 10.0001 4C10.0001 3.46957 10.2108 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12.0001 2ZM12.3901 14.79C14.0301 14.79 15.4601 14.89 16.6401 15.04C16.7001 12.32 16.4601 9.92 16.0001 9C15.8701 8.73 15.6901 8.5 15.5001 8.3L7.43005 15.22C8.79005 15 10.5001 14.79 12.3901 14.79ZM7.46005 17C7.59005 18.74 7.85005 20.5 8.27005 22H10.3401C10.0501 21.12 9.84005 20.09 9.68005 19C9.68005 19 12.0001 18.56 14.3201 19C14.1601 20.09 13.9501 21.12 13.6601 22H15.7301C16.1701 20.45 16.4301 18.61 16.5601 16.79C15.4101 16.65 14.0001 16.54 12.3901 16.54C10.4601 16.54 8.78005 16.75 7.46005 17ZM12.0001 7C12.0001 7 9.00005 7 8.00005 9C7.66005 9.68 7.44005 11.15 7.37005 12.96L13.9201 7.34C12.9301 7 12.0001 7 12.0001 7ZM18.5701 5.67L17.4301 4.34L13.9201 7.35C14.4701 7.54 15.0501 7.84 15.5001 8.3L18.5701 5.67ZM20.6701 15.83C20.5801 15.8 19.1401 15.33 16.6401 15.04C16.6301 15.61 16.6001 16.2 16.5601 16.79C18.8101 17.07 20.1001 17.5 20.1201 17.5L20.6701 15.83ZM7.37005 12.96L3.43005 16.34L4.32005 17.82C4.34005 17.81 5.50005 17.36 7.46005 17C7.35005 15.59 7.32005 14.2 7.37005 12.96Z" />
    </Svg>
  );
};
