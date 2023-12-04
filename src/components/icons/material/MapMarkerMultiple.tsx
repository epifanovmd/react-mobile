import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MapMarkerMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 11.5C14.3283 11.5 14.6534 11.4353 14.9567 11.3097C15.26 11.1841 15.5356 10.9999 15.7678 10.7678C15.9999 10.5356 16.1841 10.26 16.3097 9.95671C16.4353 9.65339 16.5 9.3283 16.5 9C16.5 8.33696 16.2366 7.70107 15.7678 7.23223C15.2989 6.76339 14.663 6.5 14 6.5C13.337 6.5 12.7011 6.76339 12.2322 7.23223C11.7634 7.70107 11.5 8.33696 11.5 9C11.5 9.3283 11.5647 9.65339 11.6903 9.95671C11.8159 10.26 12.0001 10.5356 12.2322 10.7678C12.7011 11.2366 13.337 11.5 14 11.5ZM14 2C17.86 2 21 5.13 21 9C21 14.25 14 22 14 22C14 22 7 14.25 7 9C7 7.14348 7.7375 5.36301 9.05025 4.05025C10.363 2.7375 12.1435 2 14 2ZM5 9C5 13.5 10.08 19.66 11 20.81L10 22C10 22 3 14.25 3 9C3 5.83 5.11 3.15 8 2.29C6.16 3.94 5 6.33 5 9Z" />
    </Svg>
  );
};
