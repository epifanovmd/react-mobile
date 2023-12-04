import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatListTextIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 14H8V20H2V14ZM16 8H10V10H16V8ZM2 10H8V4H2V10ZM10 4V6H22V4H10ZM10 20H16V18H10V20ZM10 16H22V14H10" />
    </Svg>
  );
};
