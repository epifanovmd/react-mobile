import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProgressAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 2V4C17.39 4.54 20.5 8.53 19.96 12.92C19.5 16.56 16.64 19.43 13 19.88V21.88C18.5 21.28 22.4501 16.34 21.85 10.85C21.33 6.19 17.66 2.5 13 2ZM11 2C9.04005 2.18 7.19005 2.95 5.67005 4.2L7.10005 5.74C8.22005 4.84 9.57005 4.26 11 4.06V2.06V2ZM4.26005 5.67C3.00005 7.19 2.24005 9.04 2.05005 11H4.05005C4.24005 9.58 4.80005 8.23 5.69005 7.1L4.26005 5.67ZM2.06005 13C2.26005 14.96 3.03005 16.81 4.27005 18.33L5.69005 16.9C4.81005 15.77 4.24005 14.42 4.06005 13H2.06005ZM7.06005 18.37L5.67005 19.74C7.18005 21 9.04005 21.79 11 22V20C9.58005 19.82 8.23005 19.25 7.10005 18.37H7.06005ZM13 13V7H11V13H13ZM13 17V15H11V17H13Z" />
    </Svg>
  );
};
