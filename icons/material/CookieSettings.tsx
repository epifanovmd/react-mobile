import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CookieSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.87 9.5C20.6 9 20 9 20 9H18V8C18 7 17 7 17 7H15V6C15 5 14 5 14 5H13V3C13 2 12 2 12 2C7.03 2 3 6.03 3 11C3 15.97 7.03 20 12 20C16.97 20 21 15.97 21 11C21 10.5 20.96 10 20.87 9.5ZM6.5 12C5.67 12 5 11.33 5 10.5C5 9.67 5.67 9 6.5 9C7.33 9 8 9.67 8 10.5C8 11.33 7.33 12 6.5 12ZM8 6.5C8 5.67 8.67 5 9.5 5C10.33 5 11 5.67 11 6.5C11 7.33 10.33 8 9.5 8C8.67 8 8 7.33 8 6.5ZM11 18C10.17 18 9.5 17.33 9.5 16.5C9.5 15.67 10.17 15 11 15C11.83 15 12.5 15.67 12.5 16.5C12.5 17.33 11.83 18 11 18ZM11.5 13C10.67 13 10 12.33 10 11.5C10 10.67 10.67 10 11.5 10C12.33 10 13 10.67 13 11.5C13 12.33 12.33 13 11.5 13ZM16.5 15C15.67 15 15 14.33 15 13.5C15 12.67 15.67 12 16.5 12C17.33 12 18 12.67 18 13.5C18 14.33 17.33 15 16.5 15ZM7 22H9V24H7V22ZM11 22H13V24H11V22ZM15 22H17V24H15V22Z" />
    </Svg>
  );
};
