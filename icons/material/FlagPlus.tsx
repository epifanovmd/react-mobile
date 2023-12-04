import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlagPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 14H19V17H22V19H19V22H17V19H14V17H17V14ZM12.4 5H18V12C15.78 12 13.84 13.21 12.8 15H11L10.6 13H5V20H3V3H12L12.4 5Z" />
    </Svg>
  );
};