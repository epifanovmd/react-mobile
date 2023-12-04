import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FullscreenExitIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 14H19V16H16V19H14V14ZM5 14H10V19H8V16H5V14ZM8 5H10V10H5V8H8V5ZM19 8V10H14V5H16V8H19Z" />
    </Svg>
  );
};
