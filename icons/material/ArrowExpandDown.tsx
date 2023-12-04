import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowExpandDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 4V2H2V4H11V18.17L5.5 12.67L4.08 14.08L12 22L19.92 14.08L18.5 12.67L13 18.17V4H22Z" />
    </Svg>
  );
};
