import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterPoloIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 15.9993H22V17.9993H20C18.6 17.9993 17.2 17.5993 16 16.9993C13.5 18.2993 10.5 18.2993 8 16.9993C6.8 17.5993 5.4 17.9993 4 17.9993H2V15.9993H4C5.4 15.9993 6.8 15.4993 8 14.6993C10.4 16.3993 13.6 16.3993 16 14.6993C17.2 15.4993 18.6 15.9993 20 15.9993ZM13 10.5993C13.6 10.2993 14.3 9.99933 15 9.89933V10.1993C15.3 11.1993 15.3 12.0993 15.2 13.0993C14.3 13.5993 13.2 13.8993 12.2 13.8993C12.7 12.8993 13 11.6993 13 10.5993ZM12.9 3.59933C11.5 3.99933 10.3 4.69933 9.3 5.69933C8.9 4.69933 8.7 3.69933 8.7 2.69933C10.9 1.69933 13.4 1.79933 15.6 2.89933C15.9 2.99933 16.2 3.09933 16.4 3.29933C15.2 3.19933 14 3.29933 12.9 3.59933ZM6.8 13.2993C6.2 13.5993 5.6 13.7993 5 13.8993C4.3 12.5993 4 11.1993 4 9.79933C4.5 10.7993 5.2 11.7993 6 12.5993C6.3 12.7993 6.5 13.0993 6.8 13.2993ZM19 13.8993C18.4 13.7993 17.8 13.5993 17.3 13.3993C17.5 12.1993 17.4 10.9993 17.1 9.79933C18.2 9.89933 19.2 10.1993 20.1 10.7993C20 11.7993 19.7 12.6993 19.2 13.5993L19 13.8993ZM7.4 11.1993C6.2 10.0993 5.5 8.49933 5.2 6.89933L5.1 5.99933C5.6 5.19933 6.1 4.59933 6.8 3.99933C6.9 5.39933 7.4 6.69933 8.2 7.79933C8.9 8.89933 9.9 9.89933 11 10.4993C11 11.2993 10.8 12.0993 10.5 12.8993C9.3 12.5993 8.3 11.9993 7.4 11.1993ZM13.5 5.49933C15 5.09933 16.7 5.19933 18.2 5.69933L19 6.09933C19.4 6.79933 19.6 7.59933 19.8 8.39933C17.3 7.29933 14.4 7.49933 12 8.79933C11.3 8.49933 10.8 7.99933 10.3 7.39933L10.4 7.29933C11.3 6.49933 12.3 5.79933 13.5 5.49933ZM16 18.6993C17.2 19.4993 18.6 19.9993 20 19.9993H22V21.9993H20C18.6 21.9993 17.2 21.5993 16 20.9993C13.5 22.2993 10.5 22.2993 8 20.9993C6.8 21.5993 5.4 21.9993 4 21.9993H2V19.9993H4C5.4 19.9993 6.8 19.4993 8 18.6993C10.4 20.3993 13.6 20.3993 16 18.6993Z" />
    </Svg>
  );
};
