import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartDonutIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 2.0498V5.0798C16.39 5.5698 19 8.4698 19 11.9998C19 12.8998 18.82 13.7498 18.5 14.5398L21.12 16.0698C21.68 14.8298 22 13.4498 22 11.9998C22 6.8198 18.05 2.5498 13 2.0498ZM12 18.9998C10.1435 18.9998 8.36301 18.2623 7.05025 16.9496C5.7375 15.6368 5 13.8563 5 11.9998C5 8.4698 7.61 5.5698 11 5.0798V2.0498C5.94 2.5498 2 6.8098 2 11.9998C2 14.652 3.05357 17.1955 4.92893 19.0709C5.85752 19.9995 6.95991 20.7361 8.17317 21.2386C9.38642 21.7411 10.6868 21.9998 12 21.9998C15.3 21.9998 18.23 20.3898 20.05 17.9098L17.45 16.3798C16.17 17.9998 14.21 18.9998 12 18.9998Z" />
    </Svg>
  );
};
