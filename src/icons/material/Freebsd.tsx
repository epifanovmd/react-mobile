import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FreebsdIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.68993 1.99955C3.53993 1.94955 6.07993 3.15955 6.12993 3.18955C4.83993 3.99955 3.73993 5.08955 2.90993 6.37955C2.08993 4.80955 1.33993 2.90955 1.99993 2.24955C2.16993 2.07955 2.39993 1.99955 2.68993 1.99955ZM20.8399 2.12955C21.2499 2.07955 21.5799 2.13955 21.7799 2.33955C22.8499 3.41955 19.8799 8.14955 19.3799 8.65955C18.8699 9.15955 17.5699 8.69955 16.4999 7.62955C15.4299 6.54955 14.9699 5.25955 15.4699 4.74955C15.8799 4.33955 19.0899 2.29955 20.8399 2.12955ZM11.9999 2.55955C13.2899 2.55955 14.5299 2.81955 15.6599 3.27955C15.1699 3.59955 14.8099 3.84955 14.6899 3.96955C13.6999 4.95955 14.1399 6.82955 15.7199 8.40955C16.6999 9.37955 17.8399 9.96955 18.7799 9.96955C19.4599 9.96955 19.9199 9.67955 20.1599 9.43955C20.3299 9.26955 20.5999 8.87955 20.9099 8.40955C21.4199 9.58955 21.6899 10.8796 21.6899 12.2496C21.6899 17.6096 17.3599 21.9696 11.9999 21.9696C6.63993 21.9696 2.30993 17.6096 2.30993 12.2496C2.30993 6.88955 6.63993 2.55955 11.9999 2.55955Z" />
    </Svg>
  );
};
