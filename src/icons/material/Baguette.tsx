import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BaguetteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.99988 22.0001C3.67988 22.0001 3.14988 19.6401 3.03988 18.7001C2.92146 17.7875 3.03141 16.8598 3.35988 16.0001C3.50425 15.591 3.75256 15.2266 4.08043 14.9426C4.40829 14.6585 4.80442 14.4647 5.22988 14.3801C6.39988 14.1801 7.22988 14.8801 8.28988 15.1201C8.489 15.184 8.70128 15.1952 8.90602 15.1526C9.11076 15.1101 9.30097 15.0152 9.4581 14.8772C9.61523 14.7392 9.73391 14.5628 9.80258 14.3653C9.87124 14.1678 9.88754 13.9558 9.84988 13.7501C9.40988 12.0301 6.27988 12.0001 4.99988 12.0001C4.99988 10.1401 7.03988 9.90011 8.49988 10.0401C9.36602 10.1238 10.2189 10.3118 11.0399 10.6001C11.5399 10.7701 12.1199 11.2001 12.6699 11.1601C13.4999 11.0901 13.6699 10.2301 13.3099 9.60011C12.4399 8.12011 9.96988 8.00011 8.49988 8.00011C8.49988 6.00011 10.2299 5.62011 11.8899 5.92011C12.747 6.08868 13.5823 6.3537 14.3799 6.71011C14.8899 6.93011 15.4999 7.35011 16.0599 7.16011C17.4999 6.72011 15.9999 5.18011 15.3599 4.81011C14.9107 4.56224 14.4341 4.36759 13.9399 4.23011C13.3999 4.07011 12.7399 4.13011 13.2299 3.50011C13.9961 2.82412 14.9467 2.39234 15.9599 2.26011C17.8499 1.82011 20.4599 1.74011 20.9199 4.12011C21.0732 5.37666 20.7717 6.64657 20.0699 7.70011C18.2069 10.8867 15.9005 13.7925 13.2199 16.3301C11.8 17.7856 10.2614 19.1202 8.61988 20.3201C7.61988 21.0401 6.29988 22.0001 4.99988 22.0001Z" />
    </Svg>
  );
};
