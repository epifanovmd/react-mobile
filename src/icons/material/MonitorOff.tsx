import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MonitorOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 18.0001V20.0001H16V22.0001H8V20.0001H10V18.0001H3C2.46957 18.0001 1.96086 17.7894 1.58579 17.4143C1.21071 17.0392 1 16.5305 1 16.0001V4.00008L0 3.00008L1.41 1.58008L22.16 22.3401L20.75 23.7501L15 18.0001H14ZM3 16.0001H13L3 6.00008V16.0001ZM21 2.00008C21.5304 2.00008 22.0391 2.21079 22.4142 2.58586C22.7893 2.96094 23 3.46965 23 4.00008V16.0001C23 16.5305 22.7893 17.0392 22.4142 17.4143C22.0391 17.7894 21.5304 18.0001 21 18.0001H20.66L18.66 16.0001H21V4.00008H6.66L4.66 2.00008H21Z" />
    </Svg>
  );
};
