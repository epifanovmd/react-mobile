import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MarkerCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 16L5 11L6.41 9.58L10 13.17L17.59 5.58L19 7L10 16ZM19 1H5C3.89 1 3 1.89 3 3V15.93C3 16.62 3.35 17.23 3.88 17.59L12 23L20.11 17.59C20.64 17.23 21 16.62 21 15.93V3C21 1.89 20.1 1 19 1Z" />
    </Svg>
  );
};
