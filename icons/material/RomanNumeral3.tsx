import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RomanNumeral3Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 7V9H8V15H9V17H5V15H6V9H5V7H9ZM14 7V9H13V15H14V17H10V15H11V9H10V7H14ZM19 7V9H18V15H19V17H15V15H16V9H15V7H19Z" />
    </Svg>
  );
};
