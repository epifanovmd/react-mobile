import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const WarehouseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 19H8V21H6V19ZM12 3L2 8V21H4V13H20V21H22V8L12 3ZM8 11H4V9H8V11ZM14 11H10V9H14V11ZM20 11H16V9H20V11ZM6 15H8V17H6V15ZM10 15H12V17H10V15ZM10 19H12V21H10V19ZM14 19H16V21H14V19Z" />
    </Svg>
  );
};
