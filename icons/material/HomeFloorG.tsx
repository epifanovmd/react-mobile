import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeFloorGIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L2 12H5V20H19V12H22L12 3ZM11 8H15V10H11V16H13V12H15V16C15 17.11 14.1 18 13 18H11C10.4696 18 9.96086 17.7893 9.58579 17.4142C9.21071 17.0391 9 16.5304 9 16V10C9 8.89 9.9 8 11 8Z" />
    </Svg>
  );
};
