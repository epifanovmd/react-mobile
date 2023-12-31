import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DownloadLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 20H14V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9ZM22 16C22.2591 16.0186 22.5028 16.1299 22.6864 16.3136C22.8701 16.4972 22.9814 16.7409 23 17V21C22.9814 21.2591 22.8701 21.5028 22.6864 21.6864C22.5028 21.8701 22.2591 21.9814 22 22H17C16.7409 21.9814 16.4972 21.8701 16.3136 21.6864C16.1299 21.5028 16.0186 21.2591 16 21V17C16.0186 16.7409 16.1299 16.4972 16.3136 16.3136C16.4972 16.1299 16.7409 16.0186 17 16V14.5C17 13.837 17.2634 13.2011 17.7322 12.7322C18.2011 12.2634 18.837 12 19.5 12C20.163 12 20.7989 12.2634 21.2678 12.7322C21.7366 13.2011 22 13.837 22 14.5V16ZM21 16V14.5C21 14.1022 20.842 13.7206 20.5607 13.4393C20.2794 13.158 19.8978 13 19.5 13C19.1022 13 18.7206 13.158 18.4393 13.4393C18.158 13.7206 18 14.1022 18 14.5V16H21Z" />
    </Svg>
  );
};
