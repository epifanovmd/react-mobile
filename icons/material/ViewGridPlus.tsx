import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ViewGridPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3V11H21V3H13ZM3 21H11V13H3V21ZM3 3V11H11V3H3ZM13 16H16V13H18V16H21V18H18V21H16V18H13V16Z" />
    </Svg>
  );
};
