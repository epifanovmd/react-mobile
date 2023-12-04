import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SingleQuotesLIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M10 12V15.4C10 15.9601 10 16.2399 10.109 16.4538C10.2049 16.642 10.3577 16.7952 10.5459 16.8911C10.7596 17 11.0395 17 11.5985 17H13.4015C13.9605 17 14.24 17 14.4537 16.8911C14.6419 16.7952 14.7952 16.6419 14.8911 16.4537C15 16.24 15 15.9605 15 15.4015V13.5985C15 13.0395 15 12.7596 14.8911 12.5459C14.7952 12.3577 14.642 12.2049 14.4538 12.109C14.2399 12 13.9601 12 13.4 12H10ZM10 12V10C10 8.34315 11.3431 7 13 7"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
