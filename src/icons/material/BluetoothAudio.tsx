import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BluetoothAudioIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.88 16.29L11 18.17V14.41L12.88 16.29ZM11 5.83L12.88 7.71L11 9.58V5.83ZM15.71 7.71L10 2H9V9.58L4.41 5L3 6.41L8.59 12L3 17.58L4.41 19L9 14.41V22H10L15.71 16.29L11.41 12L15.71 7.71ZM19.53 6.71L18.26 8C18.89 9.18 19.25 10.55 19.25 12C19.25 13.45 18.89 14.82 18.26 16L19.46 17.22C20.43 15.68 21 13.87 21 11.91C21 10 20.46 8.23 19.53 6.71ZM14.24 12L16.56 14.33C16.84 13.6 17 12.82 17 12C17 11.18 16.84 10.4 16.57 9.68L14.24 12Z" />
    </Svg>
  );
};
