import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MessageOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.19999 4.00047L5.19999 2.00047H20C21.11 2.00047 22 2.90047 22 4.00047V16.0005C22 16.7605 21.57 17.4105 20.95 17.7505L19.2 16.0005H20V4.00047H7.19999ZM22.11 21.4605L20.84 22.7305L16.11 18.0005H5.99999L1.99999 22.0005V4.00047C1.99999 3.97047 1.99999 3.93047 1.99999 3.90047L1.10999 3.00047L2.38999 1.73047L6.09999 5.44047L16.65 16.0005H16.66L18.66 18.0005H18.65L22.11 21.4605ZM14.11 16.0005L3.99999 5.89047V18.0005L5.99999 16.0005H14.11Z" />
    </Svg>
  );
};
