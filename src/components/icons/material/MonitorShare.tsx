import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MonitorShareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 4V16C23 17.11 22.11 18 21 18H15V16H21V4H3V16H9V18H3C1.9 18 1 17.11 1 16V4C1 2.89 1.89 2 3 2H21C22.1 2 23 2.89 23 4ZM13 13H16L12 9L8 13H11V20H8V22H16V20H13V13Z" />
    </Svg>
  );
};
