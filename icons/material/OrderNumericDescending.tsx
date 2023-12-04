import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const OrderNumericDescendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 11H3V9H7V8H5C3.9 8 3 7.11 3 6V5C3 3.9 3.9 3 5 3H7C8.11 3 9 3.9 9 5V9C9 10.11 8.11 11 7 11ZM7 5H5V6H7V5ZM5 13H7C8.11 13 9 13.9 9 15V19C9 20.11 8.11 21 7 21H5C3.9 21 3 20.11 3 19V15C3 13.9 3.9 13 5 13ZM5 19H7V15H5V19ZM12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11Z" />
    </Svg>
  );
};
