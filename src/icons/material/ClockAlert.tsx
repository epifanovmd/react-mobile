import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClockAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 12H22V18H20V12ZM20 20H22V22H20V20ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C14.3 22 16.3 21.2 18 20V10H21.8C20.9 5.4 16.8 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z" />
    </Svg>
  );
};
