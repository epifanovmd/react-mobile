import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WidgetsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 2.99945H11V7.33945L16.66 1.68945L22.31 7.33945L16.66 12.9995H21V20.9995H13V12.9995H16.66L11 7.33945V10.9995H3V2.99945ZM3 12.9995H11V20.9995H3V12.9995Z" />
    </Svg>
  );
};
