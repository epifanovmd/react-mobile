import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BookSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2V18C20 19.11 19.11 20 18 20H6C4.89 20 4 19.11 4 18V2C4 0.895 4.89 0 6 0H7V7L9.5 5.5L12 7V0H18C19.1 0 20 0.89 20 2ZM7 24H9V22H7V24ZM15 24H17V22H15V24ZM11 24H13V22H11V24Z" />
    </Svg>
  );
};
