import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SingleQuotesRIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M12 17C13.6569 17 15 15.6569 15 14V12M15 12V8.59846C15 8.0395 15 7.7596 14.8911 7.5459C14.7952 7.35774 14.6419 7.20487 14.4537 7.10899C14.2398 7 13.9602 7 13.4001 7H11.6001C11.04 7 10.7598 7 10.5459 7.10899C10.3577 7.20487 10.2049 7.35774 10.109 7.5459C10 7.75981 10 8.04005 10 8.6001V10.4001C10 10.9602 10 11.2398 10.109 11.4537C10.2049 11.6419 10.3577 11.7952 10.5459 11.8911C10.7596 12 11.0395 12 11.5985 12H15Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
