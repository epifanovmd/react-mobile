import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const InstrumentTriangleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.5 2H10.5V6.2C10.4 6.3 10.3 6.3 10.2 6.5L2.10005 20.7C1.80005 21.3 2.20005 22 2.90005 22H16V20H4.80005L11 9.2L16.7 19.2L18.4 18.2L11.8 6.4L11.5 6.1V2ZM21 6H20V18L19.5 22H21.5L21 18V6Z" />
    </Svg>
  );
};
