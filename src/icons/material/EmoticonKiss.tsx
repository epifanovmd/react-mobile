import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonKissIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.9 18.94L15.94 16C15.76 15.79 15.55 15.5 15.55 15.05C15.55 14.7052 15.687 14.3746 15.9308 14.1308C16.1746 13.887 16.5052 13.75 16.85 13.75C17.19 13.75 17.53 13.89 17.77 14.15L18.91 15.26L20.03 14.13C20.27 13.89 20.61 13.75 20.95 13.75C21.2948 13.75 21.6254 13.887 21.8692 14.1308C22.113 14.3746 22.25 14.7052 22.25 15.05C22.25 15.39 22.11 15.73 21.87 15.97L18.9 18.94ZM17.46 19.62C15.72 21.1 13.47 22 11 22C8.34784 22 5.8043 20.9464 3.92893 19.0711C2.05357 17.1957 1 14.6522 1 12C1 9.34784 2.05357 6.8043 3.92893 4.92893C5.8043 3.05357 8.34784 2 11 2C12.3132 2 13.6136 2.25866 14.8268 2.7612C16.0401 3.26375 17.1425 4.00035 18.0711 4.92893C18.9997 5.85752 19.7362 6.95991 20.2388 8.17317C20.7413 9.38642 21 10.6868 21 12C21 12.09 21 12.17 20.95 12.25C20.21 12.25 19.5 12.55 18.97 13.07L18.9 13.14L18.84 13.09C18.32 12.55 17.6 12.25 16.85 12.25C16.1074 12.25 15.3952 12.545 14.8701 13.0701C14.345 13.5952 14.05 14.3074 14.05 15.05C14.05 15.78 14.34 16.5 14.87 17.03L17.46 19.62ZM13 9.5C13 10.3 13.7 11 14.5 11C15.3 11 16 10.3 16 9.5C16 8.7 15.3 8 14.5 8C13.7 8 13 8.7 13 9.5ZM9 9.5C9 8.7 8.3 8 7.5 8C6.7 8 6 8.7 6 9.5C6 10.3 6.7 11 7.5 11C8.3 11 9 10.3 9 9.5ZM12.94 15.18L14 14.12L11.88 12L10.82 13.06L11.88 14.12L10.82 15.18L11.88 16.24L10.82 17.3L11.88 18.36L14 16.24L12.94 15.18Z" />
    </Svg>
  );
};
