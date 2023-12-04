import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChevronTripleUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.59 9.42L12 4.83L7.41 9.42L6 8L12 2L18 8L16.59 9.42ZM16.59 15.42L12 10.83L7.41 15.42L6 14L12 8L18 14L16.59 15.42ZM16.59 21.42L12 16.83L7.41 21.42L6 20L12 14L18 20L16.59 21.42Z" />
    </Svg>
  );
};
