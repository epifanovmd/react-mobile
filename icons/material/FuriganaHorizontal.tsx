import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FuriganaHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.5 2C7.12 2 6 3.12 6 4.5C6 5.88 7.12 7 8.5 7C9.88 7 11 5.88 11 4.5C11 3.12 9.88 2 8.5 2ZM15.5 2C14.12 2 13 3.12 13 4.5C13 5.88 14.12 7 15.5 7C16.88 7 18 5.88 18 4.5C18 3.12 16.88 2 15.5 2ZM11 8V10H5V12H14.95C14.53 13.13 13.5 14.5 12.16 15.67C11.12 14.74 10.35 13.82 9.82 13H7.5C8.08 14.25 9.13 15.62 10.62 16.96L6.55 20.22L5.76 20.84L7 22.41L7.8 21.78L12.17 18.28L16.55 21.78L17.33 22.41L18.58 20.84L17.8 20.22L13.73 16.97C15.34 15.5 16.7 13.85 17.07 12H19V10H13V8H11Z" />
    </Svg>
  );
};
