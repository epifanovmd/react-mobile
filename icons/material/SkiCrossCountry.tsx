import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SkiCrossCountryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 14H17.6V22H19V14ZM6.44 22H5L7 14H8.44L6.44 22ZM8.76 9.54V13H7V8.32L11.61 6.31C12.04 6.14 12.5 6.13 12.96 6.27C13.42 6.41 13.79 6.69 14.06 7.1L15 8.58C15.37 9.25 15.9 9.95 16.62 10.37C17.33 10.79 18.13 11 19 11V12.83C18 12.83 17 12.62 16.13 12.2C15.26 11.78 14.5 11.06 13.88 10.37L13.31 13.16L15.28 15V22H13.4V16.5L11.5 14.55L9.77 22H7.8L10.43 8.89L8.76 9.54ZM16 4C16 5.11 15.11 6 14 6C12.89 6 12 5.11 12 4C12 2.89 12.9 2 14 2C15.1 2 16 2.9 16 4Z" />
    </Svg>
  );
};
