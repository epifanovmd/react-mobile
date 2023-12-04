import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StoreSettingsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 6H4V4H20V6ZM21 12V14H20V20H18V14H14V20H4V14H3V12L4 7H20L21 12ZM12 14H6V18H12V14ZM18.96 12L18.36 9H5.64L5.04 12H18.96ZM7 24H9V22H7V24ZM11 24H13V22H11V24ZM15 24H17V22H15V24Z" />
    </Svg>
  );
};
