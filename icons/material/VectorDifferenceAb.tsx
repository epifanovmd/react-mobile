import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const VectorDifferenceAbIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 1C1.89 1 1 1.89 1 3V5H3V3H5V1H3ZM7 1V3H10V1H7ZM12 1V3H14V5H16V3C16 1.89 15.11 1 14 1H12ZM1 7V10H3V7H1ZM14 7C14 7 14 11.67 14 14C11.67 14 7 14 7 14C7 14 7 18 7 20C7 21.11 7.89 22 9 22H20C21.11 22 22 21.11 22 20V9C22 7.89 21.11 7 20 7C18 7 14 7 14 7ZM16 9H20V20H9V16H14C15.11 16 16 15.11 16 14V9ZM1 12V14C1 15.11 1.89 16 3 16H5V14H3V12H1Z" />
    </Svg>
  );
};
