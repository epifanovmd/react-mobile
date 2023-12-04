import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TextAccountIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 5V7H3V5H21ZM3 17H12V15H3V17ZM3 12H21V10H3V12ZM18 14C19.11 14 20 14.9 20 16C20 17.1 19.11 18 18 18C16.89 18 16 17.11 16 16C16 14.89 16.9 14 18 14ZM14 22V21C14 19.9 15.79 19 18 19C20.21 19 22 19.9 22 21V22H14Z" />
    </Svg>
  );
};
