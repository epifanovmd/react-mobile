import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ElevationRiseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 21V17.29L10.78 12.8L14.55 15L21 11.25V21H3ZM21 8.94L14.55 12.67L10.78 10.5L3 15V12.79L10.78 8.3L14.55 10.5L21 6.75V8.94Z" />
    </Svg>
  );
};
