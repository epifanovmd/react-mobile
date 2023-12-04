import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ChevronTripleDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.41 14.5801L12 19.1701L16.59 14.5801L18 16.0001L12 22.0001L6 16.0001L7.41 14.5801ZM7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008ZM7.41 2.58008L12 7.17008L16.59 2.58008L18 4.00008L12 10.0001L6 4.00008L7.41 2.58008Z" />
    </Svg>
  );
};
