import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountCashOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 11.5C16 10.12 17.12 9 18.5 9C19.88 9 21 10.12 21 11.5C21 12.88 19.88 14 18.5 14C17.12 14 16 12.88 16 11.5ZM13 3V20H24V3H13ZM22 16C20.9 16 20 16.9 20 18H17C17 16.9 16.11 16 15 16V7C16.11 7 17 6.11 17 5H20C20 6.11 20.9 7 22 7V16ZM7 6C8.1 6 9 6.9 9 8C9 9.1 8.1 10 7 10C5.9 10 5 9.1 5 8C5 6.9 5.9 6 7 6ZM7 4C4.79 4 3 5.79 3 8C3 10.21 4.79 12 7 12C9.21 12 11 10.21 11 8C11 5.79 9.21 4 7 4ZM7 14C3.13 14 0 15.79 0 18V20H11V18H2C2 17.42 3.75 16 7 16C8.83 16 10.17 16.45 11 16.95V14.72C9.87 14.27 8.5 14 7 14Z" />
    </Svg>
  );
};
