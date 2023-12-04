import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlipVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 15V17H5V15H3ZM15 19V21H17V19H15ZM19 3H5C3.9 3 3 3.9 3 5V9H5V5H19V9H21V5C21 3.9 20.1 3 19 3ZM21 19H19V21C20.1 21 21 20.1 21 19ZM1 11V13H23V11H1ZM7 19V21H9V19H7ZM19 15V17H21V15H19ZM11 19V21H13V19H11ZM3 19C3 20.1 3.9 21 5 21V19H3Z" />
    </Svg>
  );
};