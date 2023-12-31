import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbGroupOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L18.0901 20.0005C18.0601 20.0005 18.0301 20.0005 18.0001 20.0005H16.8301C16.9401 19.6805 17.0001 19.3405 17.0001 19.0005V18.8905L14.7501 16.6405C14.5701 16.8605 14.3101 17.0005 14.0001 17.0005H10.0001C9.45011 17.0005 9.00011 16.5505 9.00011 16.0005V14.0005C7.40011 12.8005 6.74011 10.8405 7.12011 9.00047L5.50011 7.40047C5.18011 8.23047 5.00011 9.11047 5.00011 10.0005C5.00011 11.8305 5.72011 13.5805 7.00011 14.8805V17.0005H5.00011C4.45011 17.0005 4.00011 16.5505 4.00011 16.0005V14.4505C2.86011 13.7905 2.12011 12.6205 2.00011 11.3105C1.85011 9.27047 3.25011 7.50047 5.20011 7.09047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM15.0001 6.00047C13.2201 4.67047 10.8601 4.72047 9.13011 5.93047L16.0801 12.8805C17.6301 10.6705 17.1701 7.63047 15.0001 6.00047ZM19.7901 16.5905C19.9101 16.4205 20.0001 16.2205 20.0001 16.0005V14.4505C21.9101 13.3405 22.5701 10.9005 21.4601 9.00047C20.8001 7.85047 19.6301 7.11047 18.3201 7.00047C18.7701 7.94047 19.0001 8.96047 19.0001 10.0005C19.0001 11.5705 18.4701 13.0905 17.5001 14.3105L19.7901 16.5905ZM10.0001 19.0005C10.0001 19.5505 10.4501 20.0005 11.0001 20.0005H13.0001C13.5501 20.0005 14.0001 19.5505 14.0001 19.0005V18.0005H10.0001V19.0005ZM7.00011 18.0005H5.00011V19.0005C5.00011 19.5505 5.45011 20.0005 6.00011 20.0005H7.17011C7.06011 19.6805 7.00011 19.3405 7.00011 19.0005V18.0005Z" />
    </Svg>
  );
};
