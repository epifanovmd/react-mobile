import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ManjaroIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2V22H7.6V7.6H14.8V2H2ZM9.2 9.2V22H14.8V9.2H9.2ZM16.4 2V22H22V2H16.4Z" />
    </Svg>
  );
};
