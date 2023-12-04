import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BluetoothSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.88 14.29L13 16.17V12.41L14.88 14.29ZM13 3.83L14.88 5.71L13 7.59V3.83ZM17.71 5.71L12 0H11V7.59L6.41 3L5 4.41L10.59 10L5 15.59L6.41 17L11 12.41V20H12L17.71 14.29L13.41 10L17.71 5.71ZM15 24H17V22H15V24ZM7 24H9V22H7V24ZM11 24H13V22H11V24Z" />
    </Svg>
  );
};
