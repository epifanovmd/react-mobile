import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SackIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 9C20 11 21 18 21 18C21 18 22 22 16 22C10 22 8 22 8 22C2 22 3 18 3 18C3 18 4 11 8 9H16ZM14 4L12 2L10 4L6 2L8 7H16L18 2L14 4Z" />
    </Svg>
  );
};
