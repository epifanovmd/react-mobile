import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlipHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 21H17V19H15V21ZM19 9H21V7H19V9ZM3 5V19C3 20.1 3.9 21 5 21H9V19H5V5H9V3H5C3.9 3 3 3.9 3 5ZM19 3V5H21C21 3.9 20.1 3 19 3ZM11 23H13V1H11V23ZM19 17H21V15H19V17ZM15 5H17V3H15V5ZM19 13H21V11H19V13ZM19 21C20.1 21 21 20.1 21 19H19V21Z" />
    </Svg>
  );
};