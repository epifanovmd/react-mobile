import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatTextVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.6 14L12 7.7L14.4 14H9.6ZM11 5L5.5 19H7.7L8.8 16H15L16.1 19H18.3L13 5H11Z" />
    </Svg>
  );
};
