import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProgressCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 2.0293V2.0493V4.0493C17.39 4.5893 20.5 8.5793 19.96 12.9693C19.5 16.6093 16.64 19.4993 13 19.9293V21.9293C18.5 21.3793 22.5 16.4993 21.9501 10.9993C21.5 6.2493 17.73 2.4993 13 2.0293ZM11 2.0593C9.05005 2.2493 7.19005 2.9993 5.67005 4.2593L7.10005 5.7393C8.22005 4.8393 9.57005 4.2593 11 4.0593V2.0593ZM4.26005 5.6693C3.00005 7.1893 2.25005 9.0393 2.05005 10.9993H4.05005C4.24005 9.5793 4.80005 8.2293 5.69005 7.0993L4.26005 5.6693ZM15.5 8.4993L10.62 13.3793L8.50005 11.2593L7.44005 12.3193L10.62 15.4993L16.56 9.5593L15.5 8.4993ZM2.06005 12.9993C2.26005 14.9593 3.03005 16.8093 4.27005 18.3293L5.69005 16.8993C4.81005 15.7693 4.24005 14.4193 4.06005 12.9993H2.06005ZM7.10005 18.3693L5.67005 19.7393C7.18005 20.9993 9.04005 21.7893 11 21.9993V19.9993C9.58005 19.8193 8.23005 19.2493 7.10005 18.3693Z" />
    </Svg>
  );
};
