import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeFloor3Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L22 12H19V20H5V12H2L12 3ZM15 11.5V10C15 8.89 14.1 8 13 8H9V10H13V12H11V14H13V16H9V18H13C13.5304 18 14.0391 17.7893 14.4142 17.4142C14.7893 17.0391 15 16.5304 15 16V14.5C15 14.1022 14.842 13.7206 14.5607 13.4393C14.2794 13.158 13.8978 13 13.5 13C13.8978 13 14.2794 12.842 14.5607 12.5607C14.842 12.2794 15 11.8978 15 11.5Z" />
    </Svg>
  );
};
