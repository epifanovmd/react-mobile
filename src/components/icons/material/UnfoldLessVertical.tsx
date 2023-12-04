import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const UnfoldLessVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.41 7.41016L10 12.0002L5.41 16.5902L4 15.1702L7.17 12.0002L4 8.83016L5.41 7.41016ZM18.59 16.5902L14 12.0002L18.59 7.42016L20 8.83016L16.83 12.0002L20 15.1702L18.59 16.5902Z" />
    </Svg>
  );
};
