import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FruitCitrusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.99997 15.9005C6.89997 15.7005 5.09997 14.9005 3.99997 13.6005C3.19997 13.6005 2.39997 13.1005 2.09997 12.3005C1.79997 11.5005 2.09997 10.7005 2.79997 10.2005C2.89997 7.20045 5.59997 4.10045 9.69997 2.70045C13.8 1.30045 18 2.10045 20 4.40045C20.8 4.40045 21.6 4.90045 21.9 5.70045C22.2 6.50045 21.9 7.30045 21.2 7.80045C21.2 8.60045 21 9.40045 20.6 10.2005C19.4 9.50045 18 9.00045 16.5 9.00045C12.6 9.00045 9.29997 12.0005 8.99997 15.9005ZM22 16.5005C22 19.5005 19.5 22.0005 16.5 22.0005C13.5 22.0005 11 19.5005 11 16.5005C11 13.5005 13.5 11.0005 16.5 11.0005C19.5 11.0005 22 13.5005 22 16.5005ZM13.3 18.0005L15.6 16.5005L13.3 15.0005C13.1 15.5005 13 16.0005 13 16.5005C13 17.0005 13.1 17.5005 13.3 18.0005ZM16 17.4005L13.9 18.8005C14.4 19.4005 15.2 19.8005 16 20.0005V17.4005ZM16 13.1005C15.2 13.2005 14.4 13.6005 13.9 14.3005L16 15.7005V13.1005ZM17 15.6005L19.1 14.2005C18.6 13.6005 17.8 13.2005 17 13.0005V15.6005ZM19.1 18.8005L17 17.4005V19.9005C17.8 19.8005 18.6 19.4005 19.1 18.8005ZM20 16.5005C20 16.0005 19.9 15.5005 19.7 15.0005L17.4 16.5005L19.7 18.0005C19.9 17.5005 20 17.0005 20 16.5005Z" />
    </Svg>
  );
};
