import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DoubleQuotesRIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M16 17C17.6569 17 19 15.6569 19 14V12.0001M19 12.0001V8.59847C19 8.03951 19 7.7596 18.8911 7.5459C18.7952 7.35774 18.6419 7.20487 18.4537 7.10899C18.2398 7 17.9602 7 17.4001 7H15.6001C15.04 7 14.7598 7 14.5459 7.10899C14.3577 7.20487 14.2049 7.35774 14.109 7.5459C14 7.75981 14 8.04005 14 8.6001V10.4001C14 10.9602 14 11.2398 14.109 11.4537C14.2049 11.6419 14.3577 11.7952 14.5459 11.8911C14.7596 12 15.0395 12 15.5985 12L19 12.0001ZM7 17C8.65685 17 10 15.6569 10 14L10 12.0001M10 12.0001V8.59846C10 8.0395 10 7.7596 9.89111 7.5459C9.79524 7.35774 9.64186 7.20487 9.4537 7.10899C9.23979 7 8.96015 7 8.4001 7H6.6001C6.04005 7 5.75981 7 5.5459 7.10899C5.35774 7.20487 5.20487 7.35774 5.10899 7.5459C5 7.75981 5 8.04005 5 8.6001V10.4001C5 10.9602 5 11.2398 5.10899 11.4537C5.20487 11.6419 5.35774 11.7952 5.5459 11.8911C5.7596 12 6.0395 12 6.59845 12L10 12.0001Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
