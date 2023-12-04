import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BunkBedOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 2H3V9H10V3H19C21.2 3 23 4.8 23 7V23H21V21H3V23H1V2ZM12 5V9H21V7C21 5.9 20.1 5 19 5H12ZM3 11V19H10V13H19C19.7 13 20.4 13.2 21 13.6V11H3ZM6.5 13C7.9 13 9 14.1 9 15.5C9 16.9 7.9 18 6.5 18C5.1 18 4 16.9 4 15.5C4 14.1 5.1 13 6.5 13ZM6.5 14.6C6 14.6 5.6 15 5.6 15.5C5.6 16 6 16.4 6.5 16.4C7 16.4 7.4 16 7.4 15.5C7.4 15 7 14.6 6.5 14.6ZM12 15V19H21V17C21 15.9 20.1 15 19 15H12ZM6.5 3C7.9 3 9 4.1 9 5.5C9 6.9 7.9 8 6.5 8C5.1 8 4 6.9 4 5.5C4 4.1 5.1 3 6.5 3ZM6.5 4.6C6 4.6 5.6 5 5.6 5.5C5.6 6 6 6.4 6.5 6.4C7 6.4 7.4 6 7.4 5.5C7.4 5 7 4.6 6.5 4.6Z" />
    </Svg>
  );
};
