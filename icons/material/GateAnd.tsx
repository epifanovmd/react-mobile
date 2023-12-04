import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GateAndIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4V20H14C16.1217 20 18.1566 19.1571 19.6569 17.6569C21.1571 16.1566 22 14.1217 22 12C22 9.87827 21.1571 7.84344 19.6569 6.34315C18.1566 4.84285 16.1217 4 14 4H2ZM4 6H14C15.5913 6 17.1174 6.63214 18.2426 7.75736C19.3679 8.88258 20 10.4087 20 12C20 13.5913 19.3679 15.1174 18.2426 16.2426C17.1174 17.3679 15.5913 18 14 18H4V6Z" />
    </Svg>
  );
};
