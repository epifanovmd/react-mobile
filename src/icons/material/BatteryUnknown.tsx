import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryUnknownIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.07 12.25L14.17 13.17C13.63 13.71 13.25 14.18 13.09 15H11.05C11.16 14.1 11.56 13.28 12.17 12.67L13.41 11.41C13.78 11.05 14 10.55 14 10C14 8.89 13.1 8 12 8C11.4696 8 10.9609 8.21071 10.5858 8.58579C10.2107 8.96086 10 9.46957 10 10H8C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10C16 10.88 15.64 11.68 15.07 12.25ZM13 19H11V17H13V19ZM16.67 4H15V2H9V4H7.33C6.97726 4 6.63897 4.14012 6.38955 4.38955C6.14012 4.63897 6 4.97726 6 5.33V20.66C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.66V5.33C18 4.59 17.4 4 16.67 4Z" />
    </Svg>
  );
};
