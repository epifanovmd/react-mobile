import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PenMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.7 7C20.4 7.4 20 7.7 20 8C20 8.3 20.3 8.6 20.6 9C21.1 9.5 21.6 9.9 21.5 10.4C21.5 10.9 21 11.4 20.5 11.9L16.4 16L15 14.7L19.2 10.5L18.2 9.5L16.8 10.9L13 7.1L17 3.3C17.4 2.9 18 2.9 18.4 3.3L20.7 5.6C21.1 6 21.1 6.7 20.7 7ZM3 17.2L12.6 7.6L16.3 11.4L6.8 21H3V17.2ZM10 5V7H2V5H10Z" />
    </Svg>
  );
};
