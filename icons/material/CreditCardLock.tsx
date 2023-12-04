import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CreditCardLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.8 15V13.5C21.8 12.1 20.4 11 19 11C17.6 11 16.2 12.1 16.2 13.5V15C15.6 15 15 15.6 15 16.2V19.7C15 20.4 15.6 21 16.2 21H21.7C22.4 21 23 20.4 23 19.8V16.3C23 15.6 22.4 15 21.8 15ZM20.5 15H17.5V13.5C17.5 12.7 18.2 12.2 19 12.2C19.8 12.2 20.5 12.7 20.5 13.5V15ZM13.03 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H20C21.11 4 22 4.89 22 6V10.04C21.42 9.6 20.75 9.26 20 9.11V8H4V11H15.04C14.5 11.72 14.2 12.58 14.2 13.5V13.74C13.5 14.34 13 15.24 13 16.2V19.7C13 19.8 13 19.9 13.03 20Z" />
    </Svg>
  );
};
