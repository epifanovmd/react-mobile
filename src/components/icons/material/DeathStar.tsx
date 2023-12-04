import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DeathStarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.05005 13H21.9501C21.4501 18.05 17.19 22 12 22C6.82005 22 2.55005 18.05 2.05005 13ZM21.9501 11H2.05005C2.55005 5.95 6.82005 2 12 2C17.18 2 21.4501 5.95 21.9501 11ZM12 6.75C12 6.4217 11.9354 6.09661 11.8097 5.79329C11.6841 5.48998 11.5 5.21438 11.2678 4.98223C11.0357 4.75009 10.7601 4.56594 10.4568 4.4403C10.1534 4.31466 9.82835 4.25 9.50005 4.25C8.83701 4.25 8.20112 4.51339 7.73228 4.98223C7.26344 5.45107 7.00005 6.08696 7.00005 6.75C7.00005 7.41304 7.26344 8.04893 7.73228 8.51777C8.20112 8.98661 8.83701 9.25 9.50005 9.25C9.82835 9.25 10.1534 9.18534 10.4568 9.0597C10.7601 8.93406 11.0357 8.74991 11.2678 8.51777C11.5 8.28562 11.6841 8.01002 11.8097 7.70671C11.9354 7.40339 12 7.0783 12 6.75Z" />
    </Svg>
  );
};
