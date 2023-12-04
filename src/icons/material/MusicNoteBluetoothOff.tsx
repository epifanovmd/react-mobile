import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteBluetoothOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 9.85L19.14 7H18.64V10.79L16.35 8.5L15.64 9.21L18.43 12L15.64 14.79L16.35 15.5L18.64 13.21V17H19.14L22 14.15L19.85 12L22 9.85ZM19.64 8.91L20.58 9.85L19.64 10.79V8.91ZM20.58 14.15L19.64 15.09V13.21L20.58 14.15ZM1.96001 3L0.687012 4.27L9.69001 13.27V13.55C9.10001 13.21 8.42001 13 7.69001 13C5.50001 13 3.69001 14.79 3.69001 17C3.69001 19.21 5.50001 21 7.69001 21C9.88001 21 11.69 19.21 11.69 17V15.27L17.42 21L18.69 19.73L1.96001 3ZM11.69 7H15.69V3H9.69001V8.18L11.69 10.18V7Z" />
    </Svg>
  );
};
