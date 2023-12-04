import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeSwitchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.5 15V11H9.5V15H13V9H15L8 3L1 9H3V15H6.5ZM9 16V18H15V16L18 19L15 22V20H9V22L6 19L9 16ZM23 9H21V15H15V10H19L13.54 5.11L16 3L23 9Z" />
    </Svg>
  );
};