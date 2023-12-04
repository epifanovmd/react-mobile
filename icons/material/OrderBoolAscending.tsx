import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const OrderBoolAscendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 3C3.79 3 2 4.79 2 7C2 9.21 3.79 11 6 11C8.21 11 10 9.21 10 7C10 4.79 8.21 3 6 3ZM6 9C4.9 9 4 8.1 4 7C4 5.9 4.9 5 6 5C7.1 5 8 5.9 8 7C8 8.1 7.1 9 6 9ZM6 13C3.79 13 2 14.79 2 17C2 19.21 3.79 21 6 21C8.21 21 10 19.21 10 17C10 14.79 8.21 13 6 13ZM12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11Z" />
    </Svg>
  );
};
