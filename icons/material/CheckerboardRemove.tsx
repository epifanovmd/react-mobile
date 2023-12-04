import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CheckerboardRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 16H12V12H8V16ZM12 12H16V8H12V12ZM2 2V22H13.5C13 21.4 12.6 20.7 12.3 20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12.4C20.7 12.7 21.4 13.1 22 13.6V2H2ZM20.1 14.5L18 16.6L15.9 14.5L14.5 15.9L16.6 18L14.5 20.1L15.9 21.5L18 19.4L20.1 21.5L21.5 20.1L19.4 18L21.5 15.9L20.1 14.5Z" />
    </Svg>
  );
};
