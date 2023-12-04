import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MicrosoftVisualStudioIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 8.5L12.25 12.32L17 16V8.5ZM4.7 18.4L2 16.7V7.7L5 6.7L9.3 10.03L18 2L22 4.5V20L17 22L9.34 14.66L4.7 18.4ZM5 14L6.86 12.28L5 10.5V14Z" />
    </Svg>
  );
};
