import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EvPlugType2Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.3 5C19 6.5 20 8.6 20 11C20 15.4 16.4 19 12 19C7.6 19 4 15.4 4 11C4 8.6 5.1 6.5 6.7 5H17.3ZM18 3H6L5.4 3.5C3.2 5.4 2 8.1 2 11C2 16.5 6.5 21 12 21C17.5 21 22 16.5 22 11C22 8.1 20.8 5.4 18.6 3.5L18 3ZM13 7.5C13 8.3 13.7 9 14.5 9C15.3 9 16 8.3 16 7.5C16 6.7 15.3 6 14.5 6C13.7 6 13 6.7 13 7.5ZM8 7.5C8 8.3 8.7 9 9.5 9C10.3 9 11 8.3 11 7.5C11 6.7 10.3 6 9.5 6C8.7 6 8 6.7 8 7.5ZM7 13C8.1 13 9 12.1 9 11C9 9.9 8.1 9 7 9C5.9 9 5 9.9 5 11C5 12.1 5.9 13 7 13ZM11.5 15C11.5 13.9 10.6 13 9.5 13C8.4 13 7.5 13.9 7.5 15C7.5 16.1 8.4 17 9.5 17C10.6 17 11.5 16.1 11.5 15ZM12 13C13.1 13 14 12.1 14 11C14 9.9 13.1 9 12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13ZM16.5 15C16.5 13.9 15.6 13 14.5 13C13.4 13 12.5 13.9 12.5 15C12.5 16.1 13.4 17 14.5 17C15.6 17 16.5 16.1 16.5 15ZM19 11C19 9.9 18.1 9 17 9C15.9 9 15 9.9 15 11C15 12.1 15.9 13 17 13C18.1 13 19 12.1 19 11Z" />
    </Svg>
  );
};
