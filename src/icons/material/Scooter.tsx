import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScooterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.82006 19H15.0001V18C15.0001 15.79 16.7901 14 19.0001 14H19.7401L17.8401 5.56C17.6301 4.65 16.8201 4 15.8901 4H12.0001V6H15.8901L17.2901 12.25H17.2801C15.1201 12.9 13.4701 14.73 13.0901 17H7.82006C7.34006 15.66 5.96006 14.76 4.40006 15.06C3.22006 15.29 2.27006 16.26 2.05006 17.44C1.70006 19.34 3.16006 21 5.00006 21C6.30006 21 7.40006 20.16 7.82006 19ZM5.00006 19C4.45006 19 4.00006 18.55 4.00006 18C4.00006 17.45 4.45006 17 5.00006 17C5.55006 17 6.00006 17.45 6.00006 18C6.00006 18.55 5.55006 19 5.00006 19ZM19.0001 15C17.3401 15 16.0001 16.34 16.0001 18C16.0001 19.66 17.3401 21 19.0001 21C20.6601 21 22.0001 19.66 22.0001 18C22.0001 16.34 20.6601 15 19.0001 15ZM19.0001 19C18.4501 19 18.0001 18.55 18.0001 18C18.0001 17.45 18.4501 17 19.0001 17C19.5501 17 20.0001 17.45 20.0001 18C20.0001 18.55 19.5501 19 19.0001 19Z" />
    </Svg>
  );
};
