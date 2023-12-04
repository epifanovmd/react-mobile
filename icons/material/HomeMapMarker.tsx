import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeMapMarkerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 7.7C14.1 7.7 15.8 9.4 15.8 11.5C15.8 14.5 12 18 12 18C12 18 8.2 14.5 8.2 11.5C8.2 9.4 9.9 7.7 12 7.7ZM12 10C11.6022 10 11.2206 10.158 10.9393 10.4393C10.658 10.7206 10.5 11.1022 10.5 11.5C10.5 11.8978 10.658 12.2794 10.9393 12.5607C11.2206 12.842 11.6022 13 12 13C12.3978 13 12.7794 12.842 13.0607 12.5607C13.342 12.2794 13.5 11.8978 13.5 11.5C13.5 11.1022 13.342 10.7206 13.0607 10.4393C12.7794 10.158 12.3978 10 12 10Z" />
    </Svg>
  );
};
