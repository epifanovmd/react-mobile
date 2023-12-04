import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SkipBackwardOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 14.17L15.83 12L18 9.83V14.17ZM20 19V5L13 12L20 19ZM4 19H6V5H4V19ZM11 14.17L8.83 12L11 9.83V14.17ZM13 19V5L6 12" />
    </Svg>
  );
};
