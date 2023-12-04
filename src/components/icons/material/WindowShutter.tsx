import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WindowShutterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 4H21V8H19V20H17V8H7V20H5V8H3V4ZM8 9H16V11H8V9ZM8 12H16V14H8V12ZM8 15H16V17H8V15ZM8 18H16V20H8V18Z" />
    </Svg>
  );
};
