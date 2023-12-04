import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RemoteTvIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 2C7.89 2 7 2.89 7 4V20C7 21.11 7.89 22 9 22H15C16.11 22 17 21.11 17 20V4C17 2.89 16.11 2 15 2H13V4H11V2H9ZM11 6H13V8H15V10H13V12H11V10H9V8H11V6ZM9 14H11V16H9V14ZM13 14H15V16H13V14ZM9 18H11V20H9V18ZM13 18H15V20H13V18Z" />
    </Svg>
  );
};
