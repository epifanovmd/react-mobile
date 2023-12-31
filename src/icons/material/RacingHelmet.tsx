import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RacingHelmetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.19998 11.2004C1.99998 13.6004 2.69998 15.6004 4.19998 17.4004C5.69998 19.2004 7.69998 20.0004 10.1 20.0004H20.1C20.6 20.0004 21.1 19.8004 21.5 19.4004C21.9 19.0004 22.1 18.5004 22.1 18.0004V17.2004C22.1 16.6004 22 15.9004 21.9 15.0004H13.7C12.7 15.0004 11.9 14.6004 11.2 13.9004C10.5 13.2004 10.1 12.3004 10.1 11.4004C10.1 9.80041 10.8 8.70041 12.3 8.10041L17.1 6.00041C15.4 4.80041 13.4 4.10041 11.1 4.00041C8.89998 3.80041 6.89998 4.50041 5.09998 5.90041C3.29998 7.30041 2.39998 9.00041 2.19998 11.2004ZM12.1 11.4004C12.1 11.8004 12.3 12.2004 12.6 12.5004C12.9 12.8004 13.3 13.0004 13.7 13.0004H21.5C20.9 10.8004 20 9.00041 18.7 7.60041L13.1 9.90041C12.4 10.1004 12.1 10.6004 12.1 11.4004Z" />
    </Svg>
  );
};
