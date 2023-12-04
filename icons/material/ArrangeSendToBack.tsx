import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrangeSendToBackIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2H11V11H2V2ZM9 4H4V9H9V4ZM22 13V22H13V13H22ZM15 20H20V15H15V20ZM16 8V11H13V8H16ZM11 16H8V13H11V16Z" />
    </Svg>
  );
};
