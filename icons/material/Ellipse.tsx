import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EllipseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 4C6.5 4 2 7.58 2 12C2 16.42 6.5 20 12 20C17.5 20 22 16.42 22 12C22 7.58 17.5 4 12 4Z" />
    </Svg>
  );
};
