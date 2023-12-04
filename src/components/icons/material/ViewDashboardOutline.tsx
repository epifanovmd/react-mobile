import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ViewDashboardOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
    </Svg>
  );
};
