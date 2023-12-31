import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CannabisOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.6201 13.42L14.5001 11.32C16.8401 8.93998 19.8301 8.10998 19.8301 8.10998C18.8701 10.6 17.7301 12.27 16.6201 13.42ZM12.0001 1.99998C12.0001 1.99998 10.8601 4.29998 10.4101 7.20998L13.7201 10.5C13.9201 8.44998 13.6101 5.62998 12.0001 1.99998ZM20.8401 22.73L22.1101 21.46L2.39011 1.72998L1.11011 2.99998L8.62011 10.5C6.50011 8.74998 4.17011 8.10998 4.17011 8.10998C5.70011 12.08 7.69011 14 9.28011 14.97C6.47011 14.59 4.00011 16 4.00011 16C6.68011 17.19 8.64011 17.23 9.94011 16.95C8.53011 18.1 8.03011 19.81 8.03011 19.81C10.0001 19.09 11.0001 18.13 11.5001 17.35V22H12.5001V17.35C13.0001 18.13 14.0001 19.09 15.9701 19.81C15.9701 19.81 15.4701 18.1 14.0601 16.95C14.3901 17 14.7701 17.07 15.2001 17.09L20.8401 22.73Z" />
    </Svg>
  );
};
