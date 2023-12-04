import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const UnfoldMoreVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.17 12.0002L15 8.83016L16.41 7.41016L21 12.0002L16.41 16.5802L15 15.1702L18.17 12.0002ZM5.83 12.0002L9 15.1702L7.59 16.5902L3 12.0002L7.59 7.42016L9 8.83016L5.83 12.0002Z" />
    </Svg>
  );
};
