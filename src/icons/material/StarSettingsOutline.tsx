import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StarSettingsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 22H13V24H11V22ZM7 24H9V22H7V24ZM15 24H17V22H15V24ZM16.54 13.97L18.18 21L12 17.27L5.82 21L7.45 13.97L2 9.24L9.19 8.63L12 2L14.81 8.63L22 9.24L16.54 13.97ZM15.76 17.66L14.77 13.38L18.09 10.5L13.71 10.13L12 6.09L10.29 10.13L5.91 10.5L9.23 13.38L8.24 17.66L12 15.39L15.76 17.66Z" />
    </Svg>
  );
};
