import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const NavigationVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.27 6.73L13.03 16.86L11.71 13.44L11.39 12.61L10.57 12.29L7.14 10.96L17.27 6.73ZM21 3L3 10.53V11.5L9.84 14.16L12.5 21H13.46L21 3Z" />
    </Svg>
  );
};
