import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DropboxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 6.2L8 9.39L13 6.2L8 3L3 6.2ZM13 6.2L18 9.39L23 6.2L18 3L13 6.2ZM3 12.55L8 15.74L13 12.55L8 9.35L3 12.55ZM18 9.35L13 12.55L18 15.74L23 12.55L18 9.35ZM8.03 16.8L13.04 20L18.04 16.8L13.04 13.61L8.03 16.8Z" />
    </Svg>
  );
};
