import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FireplaceOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 22H2V20H22V22ZM22 6H2V3H22V6ZM20 7V19H17V11C17 11 14.5 10 12 10C9.5 10 7 11 7 11V19H4V7H20Z" />
    </Svg>
  );
};
