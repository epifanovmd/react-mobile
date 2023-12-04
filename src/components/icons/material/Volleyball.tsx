import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VolleyballIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.04 4.85C17.34 3.2 15.33 2.25 13 2V5.62L22 10.8C21.72 8.5 20.73 6.5 19.04 4.85ZM12 22C15.44 22 18.16 20.62 20.17 17.86L17.06 16L8.07 21.2C9.32 21.73 10.64 22 12 22ZM13 11.41L21.15 16.07C21.59 15.13 21.88 14.14 22 13.11L13 7.93V11.41ZM3.88 17.81C4.54 18.72 5.26 19.46 6.05 20L15.04 14.9L12 13.15L3.88 17.81ZM11.04 2C10 2.09 9 2.36 8 2.8V13.15L11.04 11.41V2ZM2 12C2 13.39 2.3 14.77 2.89 16.12L6 14.28V4C3.33 6 2 8.65 2 12Z" />
    </Svg>
  );
};
