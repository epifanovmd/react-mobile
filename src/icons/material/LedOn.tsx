import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LedOnIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 0V4H13V0H11ZM18.3 2.29L15.24 5.29L16.64 6.71L19.7 3.71L18.3 2.29ZM5.71 2.29L4.29 3.71L7.29 6.71L8.71 5.29L5.71 2.29ZM12 6C10.9391 6 9.92172 6.42143 9.17157 7.17157C8.42143 7.92172 8 8.93913 8 10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM2 9V11H6V9H2ZM18 9V11H22V9H18Z" />
    </Svg>
  );
};
