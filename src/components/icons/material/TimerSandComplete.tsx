import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TimerSandCompleteIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 22H6V16L10 12L6 8V2H18V8L14 12L18 16V22ZM8 7.5L12 11.5L16 7.5V4H8V7.5ZM12 12.5L8 16.5V20H16V16.5L12 12.5ZM14 18H10V17.2L12 15.2L14 17.2V18Z" />
    </Svg>
  );
};
