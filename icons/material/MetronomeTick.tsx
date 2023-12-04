import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MetronomeTickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 1.75L8.57 2.67L4.07 19.5C4.06 19.5 4 19.84 4 20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20C20 19.84 19.94 19.5 19.93 19.5L15.43 2.67L12 1.75ZM10.29 4H13.71L17.2 17H13V12H11V17H6.8L10.29 4ZM11 5V9H10V11H14V9H13V5H11Z" />
    </Svg>
  );
};
