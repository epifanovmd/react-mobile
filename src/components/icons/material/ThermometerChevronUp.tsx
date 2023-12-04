import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ThermometerChevronUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.4099 11.83L20.5799 15L21.9999 13.59L17.4099 9L12.8199 13.59L14.2399 15L17.4099 11.83ZM9.99995 13V5C9.99995 3.34 8.65995 2 6.99995 2C5.33995 2 3.99995 3.34 3.99995 5V13C1.78995 14.66 1.33995 17.79 2.99995 20C4.65995 22.21 7.78995 22.66 9.99995 21C12.2099 19.34 12.6599 16.21 10.9999 14C10.7199 13.62 10.3799 13.28 9.99995 13ZM6.99995 4C7.54995 4 7.99995 4.45 7.99995 5V8H5.99995V5C5.99995 4.45 6.44995 4 6.99995 4Z" />
    </Svg>
  );
};
