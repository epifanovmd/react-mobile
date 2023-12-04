import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CashLockOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.8 16C22.4 16 23 16.6 23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V13.5C16.2 12.1 17.6 11 19 11C20.4 11 21.8 12.1 21.8 13.5V14H20.5V13.5C20.5 12.7 19.8 12.2 19 12.2C18.2 12.2 17.5 12.7 17.5 13.5V16H21.8ZM2 6H20V9.1L19 9C18.18 9 17.41 9.2 16.73 9.54C16.28 9.18 16 8.62 16 8H6C6 9.11 5.11 10 4 10V14C5.11 14 6 14.9 6 16H13.04L13 16.5V18H2V6ZM11 9C12.66 9 14 10.34 14 12C14 13.66 12.66 15 11 15C9.34 15 8 13.66 8 12C8 10.34 9.34 9 11 9Z" />
    </Svg>
  );
};
