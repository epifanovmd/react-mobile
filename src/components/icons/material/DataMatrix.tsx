import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DataMatrixIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2V22H22V20H20V18H22V16H20V14H22V12H18V10H16V12H14V10H12V8H8V12H12V16H10V18H12V20H10V18H8V16H6V14H4V12H6V6H4V2H2ZM6 6H8V2H6V6ZM8 16H10V14H8V16ZM18 10H22V8H18V10ZM18 8V4H16V6H14V8H18ZM16 4V2H14V4H16ZM18 4H20V2H18V4ZM20 4V6H22V4H20ZM10 2V6H12V2H10ZM14 14H16V16H18V20H14V14ZM4 18H6V20H4V18Z" />
    </Svg>
  );
};
