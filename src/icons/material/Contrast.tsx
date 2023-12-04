import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContrastIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.38 20.9C3.78 20.71 3.3 20.23 3.1 19.63L19.63 3.1C20.23 3.3 20.71 3.78 20.9 4.38L4.38 20.9ZM20 16V18H13V16H20ZM3 6H6V3H8V6H11V8H8V11H6V8H3V6Z" />
    </Svg>
  );
};
