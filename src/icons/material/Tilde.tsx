import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TildeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 15C2 15 2 9 8 9C12 9 12.5 12.5 15.5 12.5C19.5 12.5 19.5 9 19.5 9H22C22 9 22 15 16 15C12 15 10.5 11.5 8.5 11.5C4.5 11.5 4.5 15 4.5 15H2Z" />
    </Svg>
  );
};
