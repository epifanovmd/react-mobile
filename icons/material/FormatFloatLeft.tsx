import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatFloatLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 7H9V13H3V7ZM3 3H21V5H3V3ZM21 7V9H11V7H21ZM21 11V13H11V11H21ZM3 15H17V17H3V15ZM3 19H21V21H3V19Z" />
    </Svg>
  );
};
