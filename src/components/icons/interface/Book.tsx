import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BookIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M5 19.5002V6.2002C5 5.08009 5 4.51962 5.21799 4.0918C5.40973 3.71547 5.71547 3.40973 6.0918 3.21799C6.51962 3 7.08009 3 8.2002 3H17.4002C17.9602 3 18.2407 3 18.4546 3.10899C18.6427 3.20487 18.7948 3.35774 18.8906 3.5459C18.9996 3.75981 19 4.04005 19 4.6001V16.4001C19 16.9601 18.9996 17.2398 18.8906 17.4537C18.7948 17.6419 18.6429 17.7952 18.4548 17.8911C18.2411 18 17.961 18 17.402 18H7.25C6.00736 18 5 19.0074 5 20.25C5 20.6642 5.33579 21 5.75 21H16.402C16.961 21 17.2411 21 17.4548 20.8911C17.6429 20.7952 17.7948 20.642 17.8906 20.4538C17.9996 20.2399 18 19.9601 18 19.4V18"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
