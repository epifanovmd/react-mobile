import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.8 15V13.5C21.8 12.1 20.4 11 19 11C17.6 11 16.2 12.1 16.2 13.5V15C15.6 15 15 15.6 15 16.2V19.7C15 20.4 15.6 21 16.2 21H21.7C22.4 21 23 20.4 23 19.8V16.3C23 15.6 22.4 15 21.8 15ZM20.5 15H17.5V13.5C17.5 12.7 18.2 12.2 19 12.2C19.8 12.2 20.5 12.7 20.5 13.5V15ZM13 19.7V18H4V12H14.5C15.18 10.28 16.96 9 19 9C20.13 9 21.17 9.4 22 10.04V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.03C13 19.9 13 19.8 13 19.7ZM4 6H20V8H4V6Z" />
    </Svg>
  );
};
