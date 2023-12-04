import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const NpmIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 10V14H6V11H7V14H8V10H4ZM9 10V15H11V14H13V10H9ZM12 11V13H11V11H12ZM14 10V14H16V11H17V14H18V11H19V14H20V10H14ZM3 9H21V15H12V16H8V15H3V9Z" />
    </Svg>
  );
};
