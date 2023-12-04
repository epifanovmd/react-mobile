import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TimerSandPausedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 6V18H16L12 14L8 18H2V6H8L12 10L16 6H22ZM7.5 16L11.5 12L7.5 8H4V16H7.5ZM12.5 12L16.5 16H20V8H16.5L12.5 12ZM18 12V14H17.2L15.2 12H18ZM8.8 12L6.8 14H6V12H8.8Z" />
    </Svg>
  );
};
