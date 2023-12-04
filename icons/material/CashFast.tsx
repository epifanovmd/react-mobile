import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CashFastIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.12 9.88C16.56 9.32 15.8 9 15 9C14.2 9 13.44 9.32 12.88 9.88C12.32 10.44 12 11.2 12 12C12 12.8 12.32 13.56 12.88 14.12C13.44 14.68 14.2 15 15 15C15.8 15 16.56 14.68 17.12 14.12C17.68 13.56 18 12.8 18 12C18 11.2 17.68 10.44 17.12 9.88ZM7 6V18H23V6H7ZM21 14C20.47 14 19.96 14.21 19.59 14.59C19.21 14.96 19 15.47 19 16H11C11 15.47 10.79 14.96 10.41 14.59C10.04 14.21 9.53 14 9 14V10C9.53 10 10.04 9.79 10.41 9.41C10.79 9.04 11 8.53 11 8H19C19 8.53 19.21 9.04 19.59 9.41C19.96 9.79 20.47 10 21 10V14ZM5 8H3C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6H5V8ZM5 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11H5V13ZM5 18H1C0.448 18 0 17.55 0 17C0 16.45 0.448 16 1 16H5V18Z" />
    </Svg>
  );
};
