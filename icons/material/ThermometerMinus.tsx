import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ThermometerMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.9999 11H13.9999V13H21.9999V11ZM10.9999 13V5C10.9999 3.34 9.65995 2 7.99995 2C6.33995 2 4.99995 3.34 4.99995 5V13C2.78995 14.66 2.33995 17.79 3.99995 20C5.65995 22.21 8.78995 22.66 10.9999 21C13.2099 19.34 13.6599 16.21 11.9999 14C11.7199 13.62 11.3799 13.28 10.9999 13ZM7.99995 4C8.54995 4 8.99995 4.45 8.99995 5V8H6.99995V5C6.99995 4.45 7.44995 4 7.99995 4Z" />
    </Svg>
  );
};
