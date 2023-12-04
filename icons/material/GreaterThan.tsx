import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GreaterThanIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.5 4.13965L4.5 5.85965L15 11.9996L4.5 18.1396L5.5 19.8596L19 11.9996L5.5 4.13965Z" />
    </Svg>
  );
};
