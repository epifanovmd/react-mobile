import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MapMarkerOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.37 16.1L11.75 11.47L11.64 11.36L3.27 3L2 4.27L5.18 7.45C5.06 7.95 5 8.46 5 9C5 14.25 12 22 12 22C12 22 13.67 20.15 15.37 17.65L18.73 21L20 19.72L16.37 16.1ZM12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.73 14.17 10.39 13.67 10.85L17.3 14.5C18.28 12.62 19 10.68 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2C10 2 8.24 2.82 6.96 4.14L10.15 7.33C10.61 6.82 11.26 6.5 12 6.5Z" />
    </Svg>
  );
};
