import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 14V17H14V19H17V22H19V19H22V17H19V14H17ZM12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4C9.99298 4.09654 9.99298 4.19346 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12.35C12.1206 19.3581 12.0022 18.6817 12 18C12 16.4087 12.6321 14.8826 13.7574 13.7574C14.8826 12.6321 16.4087 12 18 12C18.3353 12.002 18.6698 12.0321 19 12.09V11C19 7.82 16.88 5.14 14 4.29C14.007 4.19346 14.007 4.09654 14 4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2ZM10 21C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23C12.325 23 12.6451 22.9207 12.9326 22.7691C13.2201 22.6175 13.4664 22.3982 13.65 22.13C13.3266 21.7876 13.0447 21.4083 12.81 21H10Z" />
    </Svg>
  );
};
