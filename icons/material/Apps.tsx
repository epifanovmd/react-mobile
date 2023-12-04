import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AppsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 20H20V16H16V20ZM16 14H20V10H16V14ZM10 8H14V4H10V8ZM16 8H20V4H16V8ZM10 14H14V10H10V14ZM4 14H8V10H4V14ZM4 20H8V16H4V20ZM10 20H14V16H10V20ZM4 8H8V4H4V8Z" />
    </Svg>
  );
};
