import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ShapePolygonPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 15.7V13H19V17L10 21L3 14L7 5H11V7H8.3L5.4 13.6L10.4 18.6L17 15.7ZM22 5V7H19V10H17V7H14V5H17V2H19V5H22Z" />
    </Svg>
  );
};
