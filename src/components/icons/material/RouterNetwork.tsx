import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RouterNetworkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 9C3.9 9 3 9.9 3 11V15C3 16.11 3.9 17 5 17H11V19H10C9.45 19 9 19.45 9 20H2V22H9C9 22.55 9.45 23 10 23H14C14.55 23 15 22.55 15 22H22V20H15C15 19.45 14.55 19 14 19H13V17H19C20.11 17 21 16.11 21 15V11C21 9.9 20.11 9 19 9H5ZM6 12H8V14H6V12ZM9.5 12H11.5V14H9.5V12ZM13 12H15V14H13V12Z" />
    </Svg>
  );
};
