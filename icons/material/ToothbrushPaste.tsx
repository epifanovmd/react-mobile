import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ToothbrushPasteIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.8601 1.5L12.9101 6.43L15.0301 8.55L16.0901 7.5L15.0301 6.43L17.8601 3.6L18.9201 4.66L20.0001 3.6L17.8601 1.5ZM21.4001 3.6L15.5601 9.44L13.4301 10.15L3.00006 20.57L4.43006 22L10.0801 16.33L14.3301 20.57L18.5701 16.33L14.3301 12.09L14.5001 11.9L16.6301 11.19L21.4001 6.43C22.1801 5.65 22.1801 4.38 21.4001 3.6ZM6.55006 4.31L2.31006 8.55L7.26006 13.5L11.5001 9.26L6.55006 4.31ZM18.2201 18.1L16.0901 20.22L17.5001 21.63L19.6301 19.5L18.2201 18.1Z" />
    </Svg>
  );
};
