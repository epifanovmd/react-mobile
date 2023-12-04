import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeFloorBIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L2 12H5V20H19V12H22L12 3ZM9 8H13C13.5304 8 14.0391 8.21071 14.4142 8.58579C14.7893 8.96086 15 9.46957 15 10V11.5C15 11.8978 14.842 12.2794 14.5607 12.5607C14.2794 12.842 13.8978 13 13.5 13C13.8978 13 14.2794 13.158 14.5607 13.4393C14.842 13.7206 15 14.1022 15 14.5V16C15 16.5304 14.7893 17.0391 14.4142 17.4142C14.0391 17.7893 13.5304 18 13 18H9V8ZM11 10V12H13V10H11ZM11 14V16H13V14H11Z" />
    </Svg>
  );
};
