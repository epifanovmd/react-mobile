import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OctahedronIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.6999 11.29H21.7099L12.7099 2.29C12.4999 2.1 12.2599 2 11.9999 2C11.7399 2 11.4999 2.1 11.2899 2.29L2.28995 11.29H2.29995C1.90995 11.68 1.90995 12.32 2.29995 12.71H2.28995L11.2899 21.71C11.4999 21.9 11.7399 22 11.9999 22C12.2599 22 12.4999 21.9 12.7099 21.71L21.7099 12.71H21.6999C22.0899 12.32 22.0899 11.68 21.6999 11.29ZM12.9999 8.28V5.41L17.2999 9.71L12.9999 8.28ZM10.9999 8.28L6.69995 9.71L10.9999 5.41V8.28ZM11.9999 10.05L17.8399 12L11.9999 13.95L6.15995 12L11.9999 10.05ZM10.9999 15.72V18.59L6.69995 14.29L10.9999 15.72ZM12.9999 15.72L17.2999 14.29L12.9999 18.59V15.72Z" />
    </Svg>
  );
};
