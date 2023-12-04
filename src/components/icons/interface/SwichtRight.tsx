import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SwichtRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6H8C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
