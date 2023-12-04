import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TableSplitCellIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 14H21V20H3V14H5V18H19V14ZM3 4V10H5V6H19V10H21V4H3ZM11 11V13H8V15L5 12L8 9V11H11ZM16 11V9L19 12L16 15V13H13V11H16Z" />
    </Svg>
  );
};
