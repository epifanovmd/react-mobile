import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AxisXArrowIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1.5 20.5L3 15.03L4.46 17.6L11 13.82V3H13V13.82L22.39 19.25L21.39 21L12 15.56L5.46 19.33L7 21.96L1.5 20.5Z" />
    </Svg>
  );
};
