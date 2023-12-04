import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const KeyboardTabReverseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6H2V18H4V6ZM11 6L5 12L11 18L12.41 16.58L8.83 13H23V11H8.83L12.41 7.41L11 6Z" />
    </Svg>
  );
};
