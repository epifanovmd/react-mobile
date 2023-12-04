import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GooglePlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 11H21V9H19V11H17V13H19V15H21V13H23V11ZM8 11V13.4H12C11.8 14.4 10.8 16.4 8 16.4C5.6 16.4 3.7 14.4 3.7 12C3.7 9.6 5.6 7.6 8 7.6C9.4 7.6 10.3 8.2 10.8 8.7L12.7 6.9C11.5 5.7 9.9 5 8 5C4.1 5 1 8.1 1 12C1 15.9 4.1 19 8 19C12 19 14.7 16.2 14.7 12.2C14.7 11.7 14.7 11.4 14.6 11H8Z" />
    </Svg>
  );
};