import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RoutesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 10H5L3 8L5 6H11V3L12 2L13 3V4H19L21 6L19 8H13V10H19L21 12L19 14H13V20C13.5304 20 14.0391 20.2107 14.4142 20.5858C14.7893 20.9609 15 21.4696 15 22H9C9 21.4696 9.21071 20.9609 9.58579 20.5858C9.96086 20.2107 10.4696 20 11 20V10Z" />
    </Svg>
  );
};
