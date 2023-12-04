import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TextShadowIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 3H16V6H11V18H8V6H3V3ZM12 7H14V9H12V7ZM15 7H17V9H15V7ZM18 7H20V9H18V7ZM12 10H14V12H12V10ZM12 13H14V15H12V13ZM12 16H14V18H12V16ZM12 19H14V21H12V19Z" />
    </Svg>
  );
};
