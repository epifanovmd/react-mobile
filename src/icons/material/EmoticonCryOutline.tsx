import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonCryOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.57 20C6.23 20 5.14 18.91 5.14 17.57C5.14 16.5 6.32 14.5 7.57 12.81C8.82 14.5 10 16.5 10 17.57C10 17.8891 9.93715 18.2051 9.81503 18.4999C9.69291 18.7947 9.51392 19.0626 9.28827 19.2883C9.06262 19.5139 8.79474 19.6929 8.49992 19.815C8.2051 19.9371 7.88911 20 7.57 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 13.75 2.45 15.38 3.24 16.81C3.4 16 3.81 15.07 4.31 14.17C4.11 13.5 4 12.75 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C11.76 20 11.53 20 11.29 19.96C10.82 20.7 10.14 21.28 9.34 21.63C10.19 21.87 11.08 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 14C11.59 14 11.19 14.04 10.81 14.12C11.16 14.75 11.47 15.4 11.69 16C11.79 16 11.89 16 12 16C13.25 16 14.32 16.5 14.77 17.23L16.19 15.81C15.29 14.72 13.75 14 12 14ZM15.5 8C14.7 8 14 8.7 14 9.5C14 10.3 14.7 11 15.5 11C16.3 11 17 10.3 17 9.5C17 8.7 16.3 8 15.5 8ZM10 9.5C10 8.7 9.3 8 8.5 8C7.7 8 7 8.7 7 9.5C7 10.3 7.7 11 8.5 11C9.3 11 10 10.3 10 9.5Z" />
    </Svg>
  );
};
