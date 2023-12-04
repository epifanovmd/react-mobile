import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const KnifeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.62 2C23.97 7.61 12.47 20.15 12.47 20.15L9.60002 17.28L4.91002 22L2.77002 19.86L20.62 2Z" />
    </Svg>
  );
};
