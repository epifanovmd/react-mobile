import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DiversifyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 2V4H12C10.9 4 10 4.89 10 6V9H12V6H19V8L22 5L19 2ZM19 9V11H14V13H19V15L22 12L19 9ZM11.05 10C9.94 10 9.04 10.87 9.03 12C9.02 13.13 9.9 14 11 14C12.11 14 13 13.11 13 12C13 10.91 12.13 10.03 11.05 10ZM2 11V13H8V11H2ZM10 15V18C10 19.11 10.9 20 12 20H19V22L22 19L19 16V18H12V15H10Z" />
    </Svg>
  );
};
