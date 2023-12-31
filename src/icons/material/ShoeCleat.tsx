import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShoeCleatIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 8.00047C20.76 8.00047 20.53 8.00047 20.3 8.00047L20.25 7.97047C18.14 7.84047 16.38 7.17047 15.53 6.23047L14 7.00047C13.95 7.10047 13.89 7.19047 13.84 7.28047C14.55 7.89047 15 8.65047 15 9.50047C15 9.83047 14.91 10.1405 14.79 10.4505L12.92 8.58047C12.7 8.83047 12.47 9.07047 12.22 9.29047L14.25 11.3205C14.04 11.5705 13.8 11.7905 13.5 12.0005L11.43 9.91047C11.14 10.1105 10.85 10.2805 10.55 10.4505L12.58 12.5005C12.25 12.6305 11.89 12.7405 11.5 12.8205L9.59 10.9105C9.25 11.0505 8.91 11.1805 8.56 11.2905L10.26 13.0005C10.17 13.0005 10.09 13.0005 10 13.0005C8.5 13.0005 7.2 12.5405 6.28 11.8205C5.46 11.9505 4.68 12.0005 4 12.0005C2 12.0005 2 15.0005 2 15.0005C2 16.1105 2.89 17.0005 4 17.0005V18.0005C4 18.5505 4.45 19.0005 5 19.0005C5.55 19.0005 6 18.5505 6 18.0005V17.0005H7V18.0005C7 18.5505 7.45 19.0005 8 19.0005C8.55 19.0005 9 18.5505 9 18.0005V17.0005H10V18.0005C10 18.5505 10.45 19.0005 11 19.0005C11.55 19.0005 12 18.5505 12 18.0005V17.0005H15V18.0005C15 18.5505 15.45 19.0005 16 19.0005C16.55 19.0005 17 18.5505 17 18.0005V17.0005H18V18.0005C18 18.5505 18.45 19.0005 19 19.0005C19.55 19.0005 20 18.5505 20 18.0005V17.0005H21C21 17.0005 22 17.0005 22 12.5005C22 9.00047 21 8.00047 21 8.00047Z" />
    </Svg>
  );
};
