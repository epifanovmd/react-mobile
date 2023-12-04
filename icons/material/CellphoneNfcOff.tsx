import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CellphoneNfcOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.84 22.73L18.85 20.74C18.56 21.5 17.84 22 17 22H14.92C14.81 20.59 14.5 19.25 13.97 18H16.11L6.99999 8.89V11C6.35999 10.74 5.68999 10.53 4.99999 10.37V6.89L1.10999 3L2.38999 1.73L22.11 21.46L20.84 22.73ZM17 5V13.8L19 15.8V3C19 1.9 18.11 1 17 1H6.99999C6.23999 1 5.58999 1.43 5.24999 2.05L8.19999 5H17ZM1.99999 20V23H4.99999C4.99999 21.34 3.65999 20 1.99999 20ZM1.99999 16V18C4.75999 18 6.99999 20.24 6.99999 23H8.99999C8.99999 19.13 5.86999 16 1.99999 16ZM1.99999 12V14C6.96999 14 11 18.03 11 23H13C13 16.92 8.07999 12 1.99999 12Z" />
    </Svg>
  );
};
