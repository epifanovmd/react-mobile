import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LessThanIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.5 4.14062L19.5 5.86063L8.97 12.0006L19.5 18.1406L18.5 19.8606L5 12.0006L18.5 4.14062Z" />
    </Svg>
  );
};