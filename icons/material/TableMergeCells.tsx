import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TableMergeCellsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 10H3V4H11V6H5V10ZM19 18H13V20H21V14H19V18ZM5 18V14H3V20H11V18H5ZM21 4H13V6H19V10H21V4ZM8 13V15L11 12L8 9V11H3V13H8ZM16 11V9L13 12L16 15V13H21V11H16Z" />
    </Svg>
  );
};
