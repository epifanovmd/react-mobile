import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TagArrowRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.41 11.58L12.41 2.58C12.04 2.21 11.53 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.53 2.21 12.04 2.59 12.41L3 12.81C3.9 12.27 4.94 12 6 12C9.31 12 12 14.69 12 18C12 19.06 11.72 20.09 11.18 21L11.58 21.4C11.95 21.78 12.47 22 13 22C13.53 22 14.04 21.79 14.41 21.41L21.41 14.41C21.79 14.04 22 13.53 22 13C22 12.47 21.79 11.96 21.41 11.58ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7ZM6 17H2V19H6V21L9 18L6 15V17Z" />
    </Svg>
  );
};
