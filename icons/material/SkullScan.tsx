import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SkullScanIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 0C0.9 0 0 0.9 0 2V6H2V2H6V0H2ZM18 0V2H22V6H24V2C24 0.9 23.1 0 22 0H18ZM12 3C7.6 3 4 6.6 4 11C4 13.5 5.2 15.8 7 17.2V21H9V18H11V21H13V18H15V21H17V17.2C18.8 15.7 20 13.5 20 11C20 6.6 16.4 3 12 3ZM8 14C6.9 14 6 13.1 6 12C6 10.9 6.9 10 8 10C9.1 10 10 10.9 10 12C10 13.1 9.1 14 8 14ZM10.5 16L12 13L13.5 16H10.5ZM16 14C14.9 14 14 13.1 14 12C14 10.9 14.9 10 16 10C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14ZM0 18V22C0 23.1 0.9 24 2 24H6V22H2V18H0ZM22 18V22H18V24H22C23.1 24 24 23.1 24 22V18H22Z" />
    </Svg>
  );
};
