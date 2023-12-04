import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloseOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 16.74L7.76 12L3 7.26L7.26 3L12 7.76L16.74 3L21 7.26L16.24 12L21 16.74L16.74 21L12 16.24L7.26 21L3 16.74ZM12 13.41L16.74 18.16L18.16 16.74L13.41 12L18.16 7.26L16.74 5.84L12 10.59L7.26 5.84L5.84 7.26L10.59 12L5.84 16.74L7.26 18.16L12 13.41Z" />
    </Svg>
  );
};