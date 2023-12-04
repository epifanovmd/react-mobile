import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BombOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.5 2.75C12.7 2.75 11.25 4.2 11.25 6H10V7.29C9.31 7.5 8.67 7.81 8.08 8.2L17.79 17.91C18.58 16.76 19 15.39 19 14C19 10.83 16.89 8.15 14 7.29V6H12.75C12.75 5.53587 12.9344 5.09075 13.2626 4.76256C13.5908 4.43437 14.0359 4.25 14.5 4.25C14.9641 4.25 15.4092 4.43437 15.7374 4.76256C16.0656 5.09075 16.25 5.53587 16.25 6C16.25 6.59674 16.4871 7.16903 16.909 7.59099C17.331 8.01295 17.9033 8.25 18.5 8.25C19.74 8.25 20.74 7.24 20.74 6V5.25H19.25V6C19.25 6.42 18.91 6.75 18.5 6.75C18.08 6.75 17.75 6.42 17.75 6C17.75 4.2 16.29 2.75 14.5 2.75ZM3.41 6.36L2 7.77L5.55 11.32C5.2 12.14 5 13.04 5 14C5 17.86 8.13 21 12 21C12.92 21 13.83 20.81 14.68 20.45L18.23 24L19.64 22.59L3.41 6.36Z" />
    </Svg>
  );
};
