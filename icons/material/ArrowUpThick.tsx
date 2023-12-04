import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowUpThickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 19.9999H9.99996V10.9999L6.49996 14.4999L4.07996 12.0799L12 4.15991L19.92 12.0799L17.5 14.4999L14 10.9999V19.9999Z" />
    </Svg>
  );
};
