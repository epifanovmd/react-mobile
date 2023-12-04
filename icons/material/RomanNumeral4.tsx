import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RomanNumeral4Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 7L14 17H16L18 7H16L15 12L14 7H12ZM11 7V9H10V15H11V17H7V15H8V9H7V7H11Z" />
    </Svg>
  );
};
