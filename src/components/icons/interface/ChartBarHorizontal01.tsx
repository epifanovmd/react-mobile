import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChartBarHorizontal01Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M13 9H4M13 9V4.6001C13 4.04005 12.9996 3.75981 12.8906 3.5459C12.7948 3.35774 12.6429 3.20487 12.4548 3.10899C12.2409 3 11.9601 3 11.4 3H4V9M13 9H18.4C18.9601 9 19.2409 9 19.4548 9.10899C19.6429 9.20487 19.7948 9.35774 19.8906 9.5459C19.9996 9.75981 20 10.04 20 10.6001V13.4001C20 13.9601 19.9996 14.2398 19.8906 14.4537C19.7948 14.6419 19.6429 14.7952 19.4548 14.8911C19.2411 15 18.961 15 18.402 15H16M4 9V15M4 15V21H14.402C14.961 21 15.2411 21 15.4548 20.8911C15.6429 20.7952 15.7948 20.642 15.8906 20.4538C15.9996 20.2399 16 19.9601 16 19.4V15M4 15H16"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
