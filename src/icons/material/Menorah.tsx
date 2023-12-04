import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MenorahIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 11V6L19 5V11H17V6L15 5V11H13V3L11 2V11H9V6L7 5V11H5V6L3 5V11C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H4.25C4.95 14.92 6.94 17.58 11 17.95V20H10C8.9 20 8 20.9 8 22H16C16 20.9 15.11 20 14 20H13V17.95C17.06 17.57 19.05 14.92 19.75 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11ZM11 15.94C8.34 15.63 7.05 14.11 6.45 13H11V15.94ZM13 15.94V13H17.55C16.95 14.11 15.66 15.63 13 15.94Z" />
    </Svg>
  );
};
