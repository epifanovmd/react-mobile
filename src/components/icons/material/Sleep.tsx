import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SleepIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 12H17V10L20.39 6H17V4H23V6L19.62 10H23V12ZM15 16H9V14L12.39 10H9V8H15V10L11.62 14H15V16ZM7 20H1V18L4.39 14H1V12H7V14L3.62 18H7V20Z" />
    </Svg>
  );
};
