import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderStarMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 6V20H20V22H2C0.895 22 0 21.11 0 20V6H2ZM12.78 10.05L15.81 9.79L17 7L18.19 9.79L21.22 10.05L18.92 12.04L19.61 15L17 13.47L14.39 15L15.08 12.04L12.78 10.05ZM24 6V16C24 17.11 23.11 18 22 18H6C4.9 18 4 17.11 4 16V4C4 2.89 4.9 2 6 2H12L14 4H22C23.11 4 24 4.9 24 6ZM22 6H6V16H22V6Z" />
    </Svg>
  );
};
