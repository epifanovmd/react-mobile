import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeFloorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 10H13V16H11V10ZM22 12H19V20H5V12H2L12 3L22 12ZM15 10C15 9.46957 14.7893 8.96086 14.4142 8.58579C14.0391 8.21071 13.5304 8 13 8H11C10.4696 8 9.96086 8.21071 9.58579 8.58579C9.21071 8.96086 9 9.46957 9 10V16C9 16.5304 9.21071 17.0391 9.58579 17.4142C9.96086 17.7893 10.4696 18 11 18H13C13.5304 18 14.0391 17.7893 14.4142 17.4142C14.7893 17.0391 15 16.5304 15 16V10Z" />
    </Svg>
  );
};
