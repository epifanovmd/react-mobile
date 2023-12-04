import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TagArrowDownOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.5 5C5.67 5 5 5.67 5 6.5C5 7.33 5.67 8 6.5 8C7.33 8 8 7.33 8 6.5C8 5.67 7.33 5 6.5 5ZM6.5 5C5.67 5 5 5.67 5 6.5C5 7.33 5.67 8 6.5 8C7.33 8 8 7.33 8 6.5C8 5.67 7.33 5 6.5 5ZM21.41 11.58L12.41 2.58C12.04 2.21 11.53 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.53 2.21 12.04 2.59 12.42L3 12.82C3.64 12.44 4.35 12.19 5.08 12.08L4 11V4H11L20 13L13 20L11.92 18.92C11.82 19.66 11.56 20.36 11.18 21L11.59 21.41C11.96 21.79 12.47 22 13 22C13.53 22 14.04 21.79 14.41 21.41L21.41 14.41C21.79 14.04 22 13.53 22 13C22 12.47 21.79 11.96 21.41 11.58ZM6.5 5C5.67 5 5 5.67 5 6.5C5 7.33 5.67 8 6.5 8C7.33 8 8 7.33 8 6.5C8 5.67 7.33 5 6.5 5ZM8 18V14H6V18H4L7 21L10 18H8Z" />
    </Svg>
  );
};
