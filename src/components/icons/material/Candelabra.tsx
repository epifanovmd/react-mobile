import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CandelabraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.5 11C20.5 11.55 20.05 12 19.5 12H19V14C19 15.11 18.11 16 17 16H13V20H14C15.11 20 16 20.9 16 22H8C8 20.9 8.9 20 10 20H11V16H7C5.9 16 5 15.11 5 14V12H4.5C3.95 12 3.5 11.55 3.5 11C3.5 10.45 3.95 10 4.5 10H5V4L7 5V10H7.5C8.05 10 8.5 10.45 8.5 11C8.5 11.55 8.05 12 7.5 12H7V14H11V12H10.5C9.95 12 9.5 11.55 9.5 11C9.5 10.45 9.95 10 10.5 10H11V2L13 3V10H13.5C14.05 10 14.5 10.45 14.5 11C14.5 11.55 14.05 12 13.5 12H13V14H17V12H16.5C15.95 12 15.5 11.55 15.5 11C15.5 10.45 15.95 10 16.5 10H17V4L19 5V10H19.5C20.05 10 20.5 10.45 20.5 11Z" />
    </Svg>
  );
};
