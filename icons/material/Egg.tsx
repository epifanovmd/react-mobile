import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EggIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.5 14.5C19.5 16.4891 18.7098 18.3968 17.3033 19.8033C15.8968 21.2098 13.9891 22 12 22C10.0109 22 8.10322 21.2098 6.6967 19.8033C5.29018 18.3968 4.5 16.4891 4.5 14.5C4.5 10.36 7.86 2 12 2C16.14 2 19.5 10.36 19.5 14.5Z" />
    </Svg>
  );
};
