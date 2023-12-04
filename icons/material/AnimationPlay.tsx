import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AnimationPlayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 2H14V4H4V14H2V4C2 2.89 2.89 2 4 2ZM8 6H18V8H8V18H6V8C6 6.89 6.89 6 8 6ZM12 10H20C21.11 10 22 10.89 22 12V20C22 21.11 21.11 22 20 22H12C10.89 22 10 21.11 10 20V12C10 10.89 10.89 10 12 10ZM14 12V20L20 16L14 12Z" />
    </Svg>
  );
};
