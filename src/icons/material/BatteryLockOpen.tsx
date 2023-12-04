import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryLockOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.8 16H15.5V13.5C15.5 12.7 16.2 12.2 17 12.2C17.8 12.2 18.5 12.7 18.5 13.5V14H19.8V13.5C19.8 12.1 18.4 11 17 11C15.6 11 14.2 12.1 14.2 13.5V16C13.6 16 13 16.6 13 17.2V20.7C13 21.4 13.6 22 14.2 22H19.7C20.4 22 21 21.4 21 20.8V17.3C21 16.6 20.4 16 19.8 16ZM11.27 22H5.33C4.6 22 4 21.4 4 20.67V5.33C4 4.6 4.6 4 5.33 4H7V2H13V4H14.67C15.4 4 16 4.6 16 5.33V9.11C13.86 9.55 12.2 11.38 12.2 13.5V14.74C11.5 15.34 11 16.24 11 17.2V20.7C11 20.93 11.03 21.15 11.07 21.37L11.08 21.39C11.12 21.6 11.19 21.8 11.27 22Z" />
    </Svg>
  );
};