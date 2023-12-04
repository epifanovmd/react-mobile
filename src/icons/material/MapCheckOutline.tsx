import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18.25 22L15.5 19L16.66 17.82L18.25 19.41L21.84 15.82L23 17.23L18.25 22ZM20.5 3C20.6326 3 20.7598 3.05268 20.8536 3.14645C20.9473 3.24021 21 3.36739 21 3.5V13.34C20.37 13.12 19.7 13 19 13V5.7L16 6.86V13.8C15.2 14.27 14.5 14.91 14 15.68V6.87L10 5.47V17.13L13.05 18.2L13 19C13 19.46 13.05 19.92 13.15 20.35L9 18.9L3.66 20.97L3.5 21C3.36739 21 3.24021 20.9473 3.14645 20.8536C3.05268 20.7598 3 20.6326 3 20.5V5.38C3 5.15 3.15 4.97 3.36 4.9L9 3L15 5.1L20.34 3.03L20.5 3ZM5 6.46V18.31L8 17.15V5.45L5 6.46Z" />
    </Svg>
  );
};
