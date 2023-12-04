import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MustacheIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 12C19 12 18 9 15 9C12 9 12 11 12 11C12 11 12 9 9 9C6 9 5 12 3 12C2 12 1 11 1 11C1 11 2 16 6 16C11 16 12 13 12 13C12 13 13 16 18 16C22 16 23 11 23 11C23 11 22 12 21 12Z" />
    </Svg>
  );
};
