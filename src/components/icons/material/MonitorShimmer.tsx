import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MonitorShimmerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 16H3V4H21V16ZM21 2H3C1.89 2 1 2.89 1 4V16C1 17.11 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.11 18 23 17.11 23 16V4C23 2.89 22.1 2 21 2ZM15 5.5L14.38 6.87L13 7.5L14.38 8.13L15 9.5L15.63 8.13L17 7.5L15.63 6.87L15 5.5ZM10.5 7.5L9.41 9.91L7 11L9.41 12.09L10.5 14.5L11.6 12.09L14 11L11.6 9.91L10.5 7.5Z" />
    </Svg>
  );
};
