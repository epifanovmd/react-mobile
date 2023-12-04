import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DoubleQuotesLIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M14 12V15.4C14 15.9601 14 16.2399 14.109 16.4538C14.2049 16.642 14.3577 16.7952 14.5459 16.8911C14.7596 17 15.0395 17 15.5985 17H17.4015C17.9605 17 18.24 17 18.4537 16.8911C18.6419 16.7952 18.7952 16.6419 18.8911 16.4537C19 16.24 19 15.9605 19 15.4015V13.5985C19 13.0395 19 12.7596 18.8911 12.5459C18.7952 12.3577 18.642 12.2049 18.4538 12.109C18.2399 12 17.9601 12 17.4 12H14ZM14 12V10C14 8.34315 15.3431 7 17 7M5 12V15.4C5 15.9601 5 16.2399 5.10899 16.4538C5.20487 16.642 5.35774 16.7952 5.5459 16.8911C5.7596 17 6.0395 17 6.59845 17H8.40154C8.9605 17 9.23999 17 9.4537 16.8911C9.64186 16.7952 9.79524 16.6419 9.89111 16.4537C10 16.24 10 15.9605 10 15.4015V13.5985C10 13.0395 10 12.7596 9.89111 12.5459C9.79524 12.3577 9.64196 12.2049 9.45379 12.109C9.23988 12 8.96005 12 8.4 12H5ZM5 12V10C5 8.34315 6.34315 7 8 7"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
