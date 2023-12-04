import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarBrakeAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19ZM20.5 20.5C22.66 18.31 24 15.31 24 12C24 8.69 22.66 5.69 20.5 3.5L19.42 4.58C21.32 6.5 22.5 9.11 22.5 12C22.5 14.9 21.32 17.5 19.42 19.42L20.5 20.5ZM4.58 19.42C2.68 17.5 1.5 14.9 1.5 12C1.5 9.11 2.68 6.5 4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12C0 15.31 1.34 18.31 3.5 20.5L4.58 19.42Z" />
    </Svg>
  );
};
