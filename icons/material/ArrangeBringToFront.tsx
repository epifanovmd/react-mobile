import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrangeBringToFrontIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2H11V6H9V4H4V9H6V11H2V2ZM22 13V22H13V18H15V20H20V15H18V13H22ZM8 8H16V16H8V8Z" />
    </Svg>
  );
};
