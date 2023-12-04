import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkipForwardOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 9.83L8.17 12L6 14.17V9.83ZM4 5V19L11 12L4 5ZM20 5H18V19H20V5ZM13 9.83L15.17 12L13 14.17V9.83ZM11 5V19L18 12" />
    </Svg>
  );
};
