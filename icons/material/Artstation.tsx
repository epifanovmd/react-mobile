import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArtstationIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1.77002 16.88L3.50002 19.86C3.84002 20.54 4.54002 21 5.33002 21H16.79L14.43 16.88H1.77002ZM22.23 16.9C22.23 16.5 22.11 16.11 21.9 15.78L15.17 4.1C14.82 3.44 14.15 3 13.35 3H9.80002L20.18 21L21.82 18.14C22.13 17.6 22.23 17.36 22.23 16.9ZM12.73 13.94L8.10002 5.92L3.45002 13.94H12.73Z" />
    </Svg>
  );
};
