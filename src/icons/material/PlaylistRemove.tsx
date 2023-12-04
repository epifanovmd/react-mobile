import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PlaylistRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 6V8H14V6H2ZM2 10V12H11V10H2ZM14.17 10.76L12.76 12.17L15.59 15L12.76 17.83L14.17 19.24L17 16.41L19.83 19.24L21.24 17.83L18.41 15L21.24 12.17L19.83 10.76L17 13.59L14.17 10.76ZM2 14V16H11V14H2Z" />
    </Svg>
  );
};
