import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Numeric10CircleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 9H16V15H14V9ZM22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM10 7H6V9H8V17H10V7ZM18 9C18 7.9 17.11 7 16 7H14C12.9 7 12 7.9 12 9V15C12 16.11 12.9 17 14 17H16C17.11 17 18 16.11 18 15V9Z" />
    </Svg>
  );
};
