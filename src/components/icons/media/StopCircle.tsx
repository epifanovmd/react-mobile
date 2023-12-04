import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StopCircleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 13.3996V10.5996C15 10.0396 14.9996 9.75981 14.8906 9.5459C14.7948 9.35774 14.6423 9.20487 14.4542 9.10899C14.2403 9 13.9597 9 13.3996 9H10.5996C10.0396 9 9.75981 9 9.5459 9.10899C9.35774 9.20487 9.20487 9.35774 9.10899 9.5459C9 9.75981 9 10.0396 9 10.5996V13.3996C9 13.9597 9 14.2403 9.10899 14.4542C9.20487 14.6423 9.35774 14.7948 9.5459 14.8906C9.75981 14.9996 10.0396 15 10.5996 15H13.3996C13.9597 15 14.2403 14.9996 14.4542 14.8906C14.6423 14.7948 14.7948 14.6423 14.8906 14.4542C14.9996 14.2403 15 13.9597 15 13.3996Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
