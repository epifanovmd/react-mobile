import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PinOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L12.8 16.07V22H11.2V16H6V14L8 12V11.27L2 5.27ZM16 12L18 14V16H17.82L8 6.18V4H7V2H17V4H16V12Z" />
    </Svg>
  );
};
