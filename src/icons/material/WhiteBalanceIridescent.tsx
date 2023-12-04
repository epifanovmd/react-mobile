import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WhiteBalanceIridescentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.96005 19.9508L6.76005 18.1508L5.34005 16.7408L3.55005 18.5308L4.96005 19.9508ZM3.55005 4.46078L5.34005 6.26078L6.76005 4.84078L4.96005 3.05078L3.55005 4.46078ZM20.4501 18.5308L18.66 16.7408L17.24 18.1508L19.04 19.9508L20.4501 18.5308ZM13 22.4508V19.5008H11V22.4508C11.32 22.4508 13 22.4508 13 22.4508ZM19.04 3.05078L17.24 4.84078L18.66 6.26078L20.4501 4.46078L19.04 3.05078ZM11 3.50078H13V0.550781H11V3.50078ZM5.00005 14.5008H19V8.50078H5.00005V14.5008Z" />
    </Svg>
  );
};
