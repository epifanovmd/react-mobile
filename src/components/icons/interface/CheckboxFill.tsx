import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CheckboxFillIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 13.4001V10.6001C15 10.04 14.9996 9.75981 14.8906 9.5459C14.7948 9.35774 14.6423 9.20487 14.4542 9.10899C14.2403 9 13.9597 9 13.3996 9H10.5996C10.0396 9 9.75981 9 9.5459 9.10899C9.35774 9.20487 9.20487 9.35774 9.10899 9.5459C9 9.75981 9 10.04 9 10.6001V13.4001C9 13.9601 9 14.2398 9.10899 14.4537C9.20487 14.6419 9.35774 14.7952 9.5459 14.8911C9.7596 15 10.039 15 10.598 15H13.4011C13.96 15 14.2405 15 14.4542 14.8911C14.6423 14.7952 14.7948 14.6419 14.8906 14.4537C14.9996 14.2398 15 13.9601 15 13.4001Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
