import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TrafficConeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 15L18 19H21V22H3V19H6L7 15H17ZM15 8L16 12H8L9 8H15ZM13 1L14 5H10L11 1H13Z" />
    </Svg>
  );
};
