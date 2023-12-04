import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DiscAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 14C8.9 14 8 13.1 8 12C8 10.9 8.9 10 10 10C11.1 10 12 10.9 12 12C12 13.1 11.1 14 10 14ZM10 4C5.6 4 2 7.6 2 12C2 16.4 5.6 20 10 20C14.4 20 18 16.4 18 12C18 7.6 14.4 4 10 4ZM20 13H22V7H20V13ZM20 17H22V15H20V17Z" />
    </Svg>
  );
};
