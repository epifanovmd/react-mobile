import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BasketballIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.34 14.6301C2.94 14.4101 3.56 14.3001 4.22 14.3001C5.56 14.3001 6.73 14.7201 7.73 15.5601L4.59 18.7001C3.53 17.5001 2.78 16.1301 2.34 14.6301ZM15.56 9.80008C17.53 11.2701 19.66 11.6301 21.94 10.8801C21.97 11.0901 22 11.4701 22 12.0001C22 13.0301 21.75 14.1801 21.28 15.4501C20.81 16.7101 20.23 17.7301 19.55 18.5001L13.22 12.1901L15.56 9.80008ZM8.77 16.6401C9.83 18.1701 10.05 19.8401 9.42 21.6601C8 21.2501 6.73 20.6101 5.67 19.7301L8.77 16.6401ZM12.19 13.2201L18.5 19.5501C16.33 21.4501 13.78 22.2501 10.88 21.9401C11.09 21.2801 11.2 20.5601 11.2 19.7801C11.2 19.1601 11.06 18.4301 10.78 17.6001C10.5 16.7701 10.17 16.0901 9.8 15.5601L12.19 13.2201ZM8.81 14.5001C7.88 13.6701 6.8 13.1501 5.58 12.9101C4.36 12.6801 3.19 12.7501 2.06 13.1301C2.03 12.9101 2 12.5301 2 12.0001C2 10.9701 2.25 9.82008 2.72 8.55008C3.19 7.29008 3.77 6.27008 4.45 5.50008L11.11 12.1901L8.81 14.5001ZM15.56 7.73008C14.22 6.08008 13.91 4.28008 14.63 2.34008C15.25 2.50008 15.96 2.80008 16.76 3.26008C17.55 3.71008 18.2 4.16008 18.7 4.59008L15.56 7.73008ZM21.66 9.38008C21.06 9.59008 20.44 9.70008 19.78 9.70008C18.69 9.70008 17.64 9.38008 16.64 8.72008L19.73 5.67008C20.61 6.77008 21.25 8.00008 21.66 9.38008ZM12.19 11.1101L5.5 4.45008C7.67 2.55008 10.22 1.75008 13.13 2.06008C12.91 2.72008 12.8 3.44008 12.8 4.22008C12.8 4.94008 12.96 5.75008 13.29 6.66008C13.62 7.56008 14 8.28008 14.5 8.81008L12.19 11.1101Z" />
    </Svg>
  );
};
