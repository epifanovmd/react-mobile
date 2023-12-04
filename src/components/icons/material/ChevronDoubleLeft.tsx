import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChevronDoubleLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.41 7.41L17 6L11 12L17 18L18.41 16.59L13.83 12L18.41 7.41ZM12.41 7.41L11 6L5 12L11 18L12.41 16.59L7.83 12L12.41 7.41Z" />
    </Svg>
  );
};
