import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BloodBagIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 7C20 7 20 6 20 6V5H18V7H16V6C16 4.27 14.75 1 10 1C5.25 1 4 4.27 4 6V19C4 19.33 3.9 21 2 21V23C4.93 23 6 20.61 6 19V6C6 5.88 6.05 3 10 3C13.83 3 14 5.7 14 6V7H12V5H10V6C10 6 10 7 9 7C8 7 8 8 8 8V20C8 20 8 22 13 22C13.24 22 14.13 22 17 22C22 22 22 20 22 20V8C22 8 22 7 21 7ZM15 19.4C14.2044 19.4 13.4413 19.0839 12.8787 18.5213C12.3161 17.9587 12 17.1956 12 16.4C12 14.4 15 11 15 11C15 11 18 14.4 18 16.4C18 17.1956 17.6839 17.9587 17.1213 18.5213C16.5587 19.0839 15.7956 19.4 15 19.4Z" />
    </Svg>
  );
};
