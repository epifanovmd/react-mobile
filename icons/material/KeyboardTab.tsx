import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const KeyboardTabIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 18H22V6H20V18ZM11.59 7.41L15.17 11H1V13H15.17L11.59 16.58L13 18L19 12L13 6L11.59 7.41Z" />
    </Svg>
  );
};
