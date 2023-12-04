import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MapMarkerOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 19.7L3.3 3L2 4.3L5.2 7.5C5.1 8 5 8.5 5 9C5 14.2 12 22 12 22C12 22 13.7 20.1 15.4 17.6L18.8 21L20 19.7ZM12 18.7C7.4 12.5 7 10.4 7 9.3L13.8 16.1C13.3 16.9 12.7 17.7 12 18.7ZM8.4 5.6L7 4.2C8.2 2.8 10 2 12 2C15.9 2 19 5.1 19 9C19 10.7 18.3 12.6 17.3 14.5L15.8 13C17 10.6 17 9.6 17 9C17 6.2 14.8 4 12 4C10.6 4 9.3 4.6 8.4 5.6ZM12 6.5C13.4 6.5 14.5 7.6 14.5 9C14.5 9.7 14.2 10.4 13.7 10.9L10.2 7.4C10.6 6.8 11.3 6.5 12 6.5Z" />
    </Svg>
  );
};
