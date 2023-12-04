import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ChessPawnIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 21.9998H5V19.9998H19V21.9998ZM16 17.9998H8L10.18 9.99976H8V7.99976H10.72L10.79 7.73976C10.1 7.43976 9.55 6.88976 9.25 6.19976C8.58 4.67976 9.27 2.90976 10.79 2.24976C12.31 1.57976 14.08 2.26976 14.74 3.78976C15.41 5.30976 14.72 7.06976 13.2 7.73976L13.27 7.99976H16V9.99976H13.82L16 17.9998Z" />
    </Svg>
  );
};
