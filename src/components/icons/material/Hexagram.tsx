import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HexagramIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.4999 7.66L20.6399 6.97L16.9999 12L20.6799 16.97L14.4999 16.32L12.0299 22L9.49995 16.34L3.35995 17.03L6.99995 12L3.31995 7.03L9.49995 7.68L11.9699 2L14.4999 7.66Z" />
    </Svg>
  );
};
