import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HandCoinOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 2C13.24 2 11 4.24 11 7C11 9.76 13.24 12 16 12C18.76 12 21 9.76 21 7C21 4.24 18.76 2 16 2ZM16 10C14.34 10 13 8.66 13 7C13 5.34 14.34 4 16 4C17.66 4 19 5.34 19 7C19 8.66 17.66 10 16 10ZM19 16H17C17 14.8 16.25 13.72 15.13 13.3L8.97 11H1V22H7V20.56L14 22.5L22 20V19C22 17.34 20.66 16 19 16ZM5 20H3V13H5V20ZM13.97 20.41L7 18.5V13H8.61L14.43 15.17C14.77 15.3 15 15.63 15 16C15 16 13 15.95 12.7 15.85L10.32 15.06L9.69 16.96L12.07 17.75C12.58 17.92 13.11 18 13.65 18H19C19.39 18 19.74 18.24 19.9 18.57L13.97 20.41Z" />
    </Svg>
  );
};