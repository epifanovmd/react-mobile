import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RugbyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.22 16.2193C18.25 14.1893 19.33 11.4993 19.45 8.1993C18.36 10.6093 16.81 12.8093 14.81 14.8093C12.81 16.8093 10.61 18.3593 8.19995 19.4493C11.5 19.3593 14.16 18.2793 16.22 16.2193ZM7.77995 7.7793C5.74995 9.8093 4.66995 12.4993 4.54995 15.7993C4.99995 14.7993 5.69995 13.6493 6.60995 12.3493C7.49995 11.0493 8.37995 9.9993 9.18995 9.1893C11.19 7.1893 13.39 5.6393 15.8 4.5493C12.5 4.6393 9.83995 5.7193 7.77995 7.7793ZM20.5 3.4993C21 4.0493 21.34 5.1093 21.47 6.6993C21.59 8.2993 21.35 10.1593 20.74 12.2993C20.13 14.4493 19.11 16.2293 17.67 17.6693C16.36 18.9993 14.8 19.9493 13 20.5493C11.21 21.1593 9.43995 21.4693 7.68995 21.4693C5.55995 21.4693 4.16995 21.1393 3.49995 20.4993C2.99995 19.9493 2.65995 18.8893 2.52995 17.2993C2.40995 15.6993 2.64995 13.8393 3.25995 11.6993C3.86995 9.5493 4.88995 7.7693 6.32995 6.3293C7.63995 4.9993 9.19995 4.0493 11 3.4493C12.79 2.8393 14.56 2.5293 16.31 2.5293C18.44 2.5293 19.83 2.8593 20.5 3.4993Z" />
    </Svg>
  );
};
