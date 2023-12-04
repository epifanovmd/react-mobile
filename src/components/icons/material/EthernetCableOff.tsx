import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const EthernetCableOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 3H13V7H11V3ZM8 4H10V8H14V4H16V11H12.82L8 6.18V4ZM20 20.72L18.73 22L14 17.27V22H10V13.27L2 5.27L3.28 4L20 20.72Z" />
    </Svg>
  );
};
