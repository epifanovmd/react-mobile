import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PhoneCancelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79ZM16.5 2C14 2 12 4 12 6.5C12 9 14 11 16.5 11C19 11 21 9 21 6.5C21 4 19 2 16.5 2ZM16.5 9.5C14.84 9.5 13.5 8.16 13.5 6.5C13.5 5.94 13.65 5.42 13.92 5L18 9.08C17.58 9.35 17.06 9.5 16.5 9.5ZM19.08 8L15 3.92C15.42 3.65 15.94 3.5 16.5 3.5C18.16 3.5 19.5 4.84 19.5 6.5C19.5 7.06 19.35 7.58 19.08 8Z" />
    </Svg>
  );
};