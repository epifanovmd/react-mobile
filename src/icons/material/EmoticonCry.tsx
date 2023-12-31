import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonCryIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.14 17.57C5.14 16.5 6.32 14.5 7.57 12.81C8.82 14.5 10 16.5 10 17.57C10 17.8891 9.93715 18.2051 9.81503 18.4999C9.69291 18.7947 9.51392 19.0626 9.28827 19.2883C9.06262 19.5139 8.79474 19.6929 8.49992 19.815C8.2051 19.9371 7.88911 20 7.57 20C6.23 20 5.14 18.91 5.14 17.57ZM22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C11.08 22 10.18 21.86 9.33 21.63C10.9 20.95 12 19.39 12 17.57C12 17.12 11.89 16.6 11.69 16C11.79 16 11.89 16 12 16C13.25 16 14.32 16.5 14.77 17.23L16.19 15.81C15.29 14.72 13.75 14 12 14C11.59 14 11.19 14.04 10.81 14.12C10.38 13.36 9.85 12.53 9.19 11.63L8.71 11C9.42 10.87 10 10.23 10 9.5C10 8.7 9.3 8 8.5 8C7.7 8 7 8.7 7 9.5C7 9.69 7.04 9.87 7.11 10.04L5.96 11.63C4.4 13.75 3.5 15.5 3.23 16.81C2.45 15.38 2 13.74 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12ZM17 9.5C17 8.7 16.3 8 15.5 8C14.7 8 14 8.7 14 9.5C14 10.3 14.7 11 15.5 11C16.3 11 17 10.3 17 9.5Z" />
    </Svg>
  );
};
