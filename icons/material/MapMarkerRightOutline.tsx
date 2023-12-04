import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MapMarkerRightOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 6.5C10.38 6.5 11.5 7.62 11.5 9C11.5 10.38 10.38 11.5 9 11.5C7.62 11.5 6.5 10.38 6.5 9C6.5 7.62 7.62 6.5 9 6.5ZM9 2C12.87 2 16 5.13 16 9C16 14.25 9 22 9 22C9 22 2 14.25 2 9C2 5.13 5.13 2 9 2ZM9 4C6.24 4 4 6.24 4 9C4 10 4 12 9 18.71C14 12 14 10 14 9C14 6.24 11.76 4 9 4ZM18 17L23 12L18 7V17Z" />
    </Svg>
  );
};
