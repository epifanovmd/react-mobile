import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowExpandRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 2H2V22H4V13H18.17L12.67 18.5L14.08 19.92L22 12L14.08 4.08L12.67 5.5L18.17 11H4V2Z" />
    </Svg>
  );
};
