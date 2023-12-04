import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArchiveMarkerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 7H3V3H21V7ZM13.63 13H9V11.5C9 11.22 9.22 11 9.5 11H14.5C14.72 11 14.9 11.14 14.97 11.33C15.93 10.5 17.17 10 18.5 10C19 10 19.5 10.08 20 10.22V8H4V21H15.19C14.12 19.43 13 17.35 13 15.5C13 14.61 13.23 13.76 13.63 13ZM22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12C20.4 12 22 13.6 22 15.5ZM19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6Z" />
    </Svg>
  );
};
