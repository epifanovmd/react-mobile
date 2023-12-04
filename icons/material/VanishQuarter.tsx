import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const VanishQuarterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 3H13V8H11V3ZM4.9 6.3L6.3 4.9L9.1 7.7L7.8 9.2L4.9 6.3ZM8 13H3V11H8V13Z" />
    </Svg>
  );
};
