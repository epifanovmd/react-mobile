import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BalconyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 10V12H8V10H10ZM16 12V10H14V12H16ZM21 14V22H3V14H4V10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10V14H21ZM7 16H5V20H7V16ZM11 16H9V20H11V16ZM11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08ZM13 14H18V10C18 7.03 15.84 4.56 13 4.08V14ZM15 16H13V20H15V16ZM19 16H17V20H19V16Z" />
    </Svg>
  );
};
