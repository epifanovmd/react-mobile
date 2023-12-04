import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThermometerLinesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 3H21V5H17V3ZM17 7H21V9H17V7ZM17 11H21V13H17.75L17 12.1V11ZM21 15V17H19C19 16.31 18.9 15.63 18.71 15H21ZM7 3V5H3V3H7ZM7 7V9H3V7H7ZM7 11V12.1L6.25 13H3V11H7ZM3 15H5.29C5.1 15.63 5 16.31 5 17H3V15ZM15 13V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20C9.66 22.21 12.79 22.66 15 21C17.21 19.34 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13ZM12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" />
    </Svg>
  );
};
