import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MapCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.25 22L15.5 19L16.66 17.82L18.25 19.41L21.84 15.82L23 17.23L18.25 22ZM20.5 3C20.6326 3 20.7598 3.05268 20.8536 3.14645C20.9473 3.24021 21 3.36739 21 3.5V13.36C20.36 13.13 19.69 13 19 13C17.46 13 16.06 13.6 15 14.56V7.1L9 5V16.9L13.04 18.3C13 18.54 13 18.77 13 19C13 19.46 13.06 19.92 13.16 20.36L9 18.9L3.66 20.97C3.59 21 3.55 21 3.5 21C3.36739 21 3.24021 20.9473 3.14645 20.8536C3.05268 20.7598 3 20.6326 3 20.5V5.38C3 5.15 3.16 4.97 3.35 4.9L9 3L15 5.1L20.33 3" />
    </Svg>
  );
};
