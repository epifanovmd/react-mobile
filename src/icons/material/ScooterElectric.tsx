import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScooterElectricIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.82006 16H15.0001V15C15.0001 12.79 16.7901 11 19.0001 11H19.7401L17.8401 2.56C17.6301 1.65 16.8201 1 15.8901 1H12.0001V3H15.8901L17.2901 9.25H17.2801C15.1201 9.9 13.4701 11.73 13.0901 14H7.82006C7.34006 12.66 5.96006 11.76 4.40006 12.06C3.22006 12.29 2.27006 13.26 2.05006 14.44C1.70006 16.34 3.16006 18 5.00006 18C6.30006 18 7.40006 17.16 7.82006 16ZM5.00006 16C4.45006 16 4.00006 15.55 4.00006 15C4.00006 14.45 4.45006 14 5.00006 14C5.55006 14 6.00006 14.45 6.00006 15C6.00006 15.55 5.55006 16 5.00006 16ZM19.0001 12C17.3401 12 16.0001 13.34 16.0001 15C16.0001 16.66 17.3401 18 19.0001 18C20.6601 18 22.0001 16.66 22.0001 15C22.0001 13.34 20.6601 12 19.0001 12ZM19.0001 16C18.4501 16 18.0001 15.55 18.0001 15C18.0001 14.45 18.4501 14 19.0001 14C19.5501 14 20.0001 14.45 20.0001 15C20.0001 15.55 19.5501 16 19.0001 16ZM11.0001 20H7.00006L13.0001 23V21H17.0001L11.0001 18V20Z" />
    </Svg>
  );
};
