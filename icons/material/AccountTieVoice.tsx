import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AccountTieVoiceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.75 4.36C18.77 6.56 18.77 9.61 16.75 11.63L15.07 9.94C15.91 8.76 15.91 7.23 15.07 6.05L16.75 4.36ZM20.06 1C24 5.05 23.96 11.11 20.06 15L18.43 13.37C21.2 10.19 21.2 5.65 18.43 2.63L20.06 1ZM9.00002 4C11.2 4 13 5.79 13 8C13 10.21 11.2 12 9.00002 12C6.80002 12 5.00002 10.21 5.00002 8C5.00002 5.79 6.79002 4 9.00002 4ZM13 14.54C13 15.6 12.71 18.07 10.8 20.83L10 16L10.93 14.12C10.31 14.05 9.66002 14 9.00002 14C8.34002 14 7.67002 14.05 7.05002 14.12L8.00002 16L7.18002 20.83C5.27002 18.07 5.00002 15.6 5.00002 14.54C2.60002 15.24 0.994019 16.5 0.994019 18V22H17V18C17 16.5 15.39 15.24 13 14.54Z" />
    </Svg>
  );
};
