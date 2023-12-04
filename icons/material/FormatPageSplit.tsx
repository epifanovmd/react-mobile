import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatPageSplitIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 11V7H13V11H11ZM13 1V5H11V1H13ZM11 17V13H13V17H11ZM9 20H6V4H9V2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H9V20ZM15 3V8H18V20H15V22H18C19.11 22 20 21.11 20 20V8L15 3ZM13 19H11V23H13V19Z" />
    </Svg>
  );
};