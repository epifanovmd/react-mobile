import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AccountMusicIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 14C12 14 13.05 14.16 14.2 14.44C13.39 15.31 13 16.33 13 17.5C13 18.39 13.25 19.23 13.78 20H3V18C3 16.81 3.91 15.85 5.74 15.12C7.57 14.38 9.33 14 11 14ZM11 12C9.92 12 9 11.61 8.18 10.83C7.38 10.05 7 9.11 7 8C7 6.92 7.38 6 8.18 5.18C9 4.38 9.92 4 11 4C12.11 4 13.05 4.38 13.83 5.18C14.61 6 15 6.92 15 8C15 9.11 14.61 10.05 13.83 10.83C13.05 11.61 12.11 12 11 12ZM18.5 10H20H22V12H20V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20C16.837 20 16.2011 19.7366 15.7322 19.2678C15.2634 18.7989 15 18.163 15 17.5C15 16.837 15.2634 16.2011 15.7322 15.7322C16.2011 15.2634 16.837 15 17.5 15C17.86 15 18.19 15.07 18.5 15.21V10Z" />
    </Svg>
  );
};
