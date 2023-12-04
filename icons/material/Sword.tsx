import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SwordIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.92 5H5L14 14L15 13.06L6.92 5ZM19.96 19.12L19.12 19.96C18.73 20.35 18.1 20.35 17.71 19.96L14.59 16.84L11.91 19.5L10.5 18.09L11.92 16.67L3 7.75V3H7.75L16.67 11.92L18.09 10.5L19.5 11.91L16.83 14.58L19.95 17.7C20.35 18.1 20.35 18.73 19.96 19.12Z" />
    </Svg>
  );
};
