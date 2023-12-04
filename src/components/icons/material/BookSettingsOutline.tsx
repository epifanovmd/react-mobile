import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BookSettingsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 0H6C4.89 0 4 0.895 4 2V18C4 19.11 4.89 20 6 20H18C19.11 20 20 19.11 20 18V2C20 0.895 19.11 0 18 0ZM18 18H6V2H8V10L10.5 7.75L13 10V2H18V18ZM7 22H9V24H7V22ZM11 22H13V24H11V22ZM15 22H17V24H15V22Z" />
    </Svg>
  );
};
