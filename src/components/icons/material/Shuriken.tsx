import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ShurikenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.5 9.5L12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5ZM12 13.7C11.1 13.7 10.3 13 10.3 12C10.3 11.1 11 10.3 12 10.3C12.9 10.3 13.7 11 13.7 12C13.7 12.9 12.9 13.7 12 13.7Z" />
    </Svg>
  );
};
