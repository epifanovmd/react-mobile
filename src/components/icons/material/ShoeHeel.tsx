import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ShoeHeelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 18H11.7L17 14H18V18H20V14C20 14 21 12 21 10C21 8 20.5 6 20.5 6H18.5L18 7L10 14H8L3 16V18Z" />
    </Svg>
  );
};
