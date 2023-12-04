import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DataMatrixScanIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2H6V0H2C0.9 0 0 0.9 0 2V6H2V2ZM22 0H18V2H22V6H24V2C24 0.9 23.1 0 22 0ZM2 18H0V22C0 23.1 0.9 24 2 24H6V22H2V18ZM22 22H18V24H22C23.1 24 24 23.1 24 22V18H22V22ZM8 6V4H10V6H8ZM10 14V12H12V14H10ZM16 4H18V6H16V4ZM18 6H20V8H18V6ZM18 14H20V16H18V14ZM20 12H16V18H20V20H4V4H6V6H8V10H6V12H8V14H10V16H12V18H14V16H12V14H14V10H10V6H12V4H14V8H16V10H20V12ZM8 18V16H6V18H8Z" />
    </Svg>
  );
};
