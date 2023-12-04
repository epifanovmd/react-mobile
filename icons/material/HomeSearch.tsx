import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12C13 12 11 14 11 16.5C11 19 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9ZM15.5 19C14.12 19 13 17.88 13 16.5C13 15.12 14.12 14 15.5 14C16.88 14 18 15.12 18 16.5C18 17.88 16.88 19 15.5 19ZM5 20V12H2L12 3L22 12H20.18C19 10.77 17.34 10 15.5 10C11.92 10 9 12.92 9 16.5C9 17.79 9.38 19 10.03 20H5Z" />
    </Svg>
  );
};
