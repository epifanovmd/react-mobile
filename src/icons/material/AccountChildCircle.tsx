import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountChildCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 12C12.3978 12 12.7794 12.158 13.0607 12.4393C13.342 12.7206 13.5 13.1022 13.5 13.5C13.5 13.8978 13.342 14.2794 13.0607 14.5607C12.7794 14.842 12.3978 15 12 15C11.6022 15 11.2206 14.842 10.9393 14.5607C10.658 14.2794 10.5 13.8978 10.5 13.5C10.5 13.1022 10.658 12.7206 10.9393 12.4393C11.2206 12.158 11.6022 12 12 12ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 16C12.72 16 13.4 16.15 14.04 16.5C14.68 16.8 15 17.2 15 17.67V19.41C16.34 18.81 17 18.08 17 17.2V12.8C17 12 16.5 11.35 15.45 10.8C14.4 10.26 13.25 10 12 10C10.75 10 9.6 10.26 8.55 10.8C7.5 11.35 7 12 7 12.8V17.2C7 18 7.53 18.69 8.63 19.22C9.72 19.75 10.84 20 12 20L13 19.92V17.91L12 18C11 18 10 17.8 9.05 17.39C9.17 17 9.53 16.69 10.13 16.41C10.72 16.13 11.34 16 12 16ZM12 4C11.337 4 10.7011 4.26339 10.2322 4.73223C9.76339 5.20107 9.5 5.83696 9.5 6.5C9.5 7.16304 9.76339 7.79893 10.2322 8.26777C10.7011 8.73661 11.337 9 12 9C12.663 9 13.2989 8.73661 13.7678 8.26777C14.2366 7.79893 14.5 7.16304 14.5 6.5C14.5 5.83696 14.2366 5.20107 13.7678 4.73223C13.2989 4.26339 12.663 4 12 4Z" />
    </Svg>
  );
};
