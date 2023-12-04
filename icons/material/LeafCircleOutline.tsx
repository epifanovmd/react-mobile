import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LeafCircleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.04 16.34C9.05 13.83 10.19 10.96 14.5 10C14.5 10 9.5 10 7.88 14.63C7.88 14.63 7 13.75 7 12.75C7 11.75 8 9.63 10.5 9.13C11.21 9 12 8.87 12.78 8.76C14.75 8.5 16.64 8.22 17 7.5C17 7.5 15.5 16 10 16C9.82 16 9.57 15.94 9.33 15.85L8.86 17L7.91 16.67L8.04 16.34ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" />
    </Svg>
  );
};
