import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CarShiftPatternIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 5H4V2H8V5ZM4 22H8V19H4V22ZM14 2H10V5H14V2ZM10 22H14V19H10V22ZM16 2V5H20V2H16ZM17 11H13V7H11V11H7V7H5V17H7V13H11V17H13V13H19V7H17V11Z" />
    </Svg>
  );
};
