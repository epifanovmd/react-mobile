import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarHearingOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 4.26973L2.28 2.99973L20 20.7197L18.73 21.9997L12.91 16.1797C12.19 16.7397 11.67 17.1897 11.37 18.0997C10.77 19.9197 10 20.9397 8.64 21.6497C8.13 21.8797 7.57 21.9997 7 21.9997C5.93913 21.9997 4.92172 21.5783 4.17157 20.8282C3.42143 20.078 3 19.0606 3 17.9997H5C5 18.5302 5.21071 19.0389 5.58579 19.4139C5.96086 19.789 6.46957 19.9997 7 19.9997C7.29 19.9997 7.56 19.9397 7.76 19.8497C8.47 19.4997 8.97 18.9697 9.47 17.4697C9.91 16.1197 10.69 15.3897 11.5 14.7597L5.04 8.30973C5 8.53973 5 8.76973 5 8.99973H3C3 8.16973 3.14 7.38973 3.39 6.65973L1 4.26973ZM14.18 11.9397C14.71 10.9997 15 9.92973 15 8.99973C15 6.19973 12.8 3.99973 10 3.99973C8.81 3.99973 7.74 4.38973 6.89 5.05973L5.46 3.62973C6.67 2.60973 8.25 1.99973 10 1.99973C13.93 1.99973 17 5.06973 17 8.99973C17 10.2597 16.62 11.6497 15.93 12.8997L15.47 13.6497L14.03 12.1997L14.18 11.9397ZM16.36 2.63973L17.78 1.21973C19.77 3.20973 21 5.95973 21 8.99973C21 11.8297 19.93 14.4097 18.18 16.3597L16.77 14.9397C18.15 13.3597 19 11.2797 19 8.99973C19 6.49973 18 4.25973 16.36 2.63973ZM12.5 8.99973C12.5 9.49973 12.36 9.92973 12.13 10.3097L8.69 6.86973C9.07 6.63973 9.5 6.49973 10 6.49973C10.663 6.49973 11.2989 6.76312 11.7678 7.23196C12.2366 7.7008 12.5 8.33669 12.5 8.99973Z" />
    </Svg>
  );
};
