import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarHearingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 19.9997C16.71 19.9997 16.44 19.9397 16.24 19.8497C15.53 19.4997 15.03 18.9697 14.53 17.4697C14 15.9097 13.06 15.1797 12.14 14.4697C11.35 13.8597 10.53 13.2297 9.82 11.9397C9.29 10.9997 9 9.92973 9 8.99973C9 6.19973 11.2 3.99973 14 3.99973C16.8 3.99973 19 6.19973 19 8.99973H21C21 5.06973 17.93 1.99973 14 1.99973C10.07 1.99973 7 5.06973 7 8.99973C7 10.2597 7.38 11.6497 8.07 12.8997C9 14.5497 10.05 15.3797 10.92 16.0497C11.73 16.6697 12.31 17.1197 12.63 18.0997C13.23 19.9197 14 20.9397 15.36 21.6497C15.87 21.8797 16.43 21.9997 17 21.9997C18.0609 21.9997 19.0783 21.5783 19.8284 20.8282C20.5786 20.078 21 19.0606 21 17.9997H19C19 18.5302 18.7893 19.0389 18.4142 19.4139C18.0391 19.789 17.5304 19.9997 17 19.9997ZM7.64 2.63973L6.22 1.21973C4.23 3.20973 3 5.95973 3 8.99973C3 12.0397 4.23 14.7897 6.22 16.7797L7.63 15.3697C6 13.7397 5 11.4997 5 8.99973C5 6.49973 6 4.25973 7.64 2.63973ZM11.5 8.99973C11.5 9.32803 11.5647 9.65312 11.6903 9.95644C11.8159 10.2597 12.0001 10.5353 12.2322 10.7675C12.7011 11.2363 13.337 11.4997 14 11.4997C14.3283 11.4997 14.6534 11.4351 14.9567 11.3094C15.26 11.1838 15.5356 10.9996 15.7678 10.7675C15.9999 10.5353 16.1841 10.2597 16.3097 9.95644C16.4353 9.65312 16.5 9.32803 16.5 8.99973C16.5 8.33669 16.2366 7.7008 15.7678 7.23196C15.2989 6.76312 14.663 6.49973 14 6.49973C13.337 6.49973 12.7011 6.76312 12.2322 7.23196C11.7634 7.7008 11.5 8.33669 11.5 8.99973Z" />
    </Svg>
  );
};
