import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeFloorAIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3L2 12H5V20H19V12H22L12 3ZM11 8H13C13.5304 8 14.0391 8.21071 14.4142 8.58579C14.7893 8.96086 15 9.46957 15 10V18H13V15H11V18H9V10C9 8.89 9.9 8 11 8ZM11 10V13H13V10H11Z" />
    </Svg>
  );
};
