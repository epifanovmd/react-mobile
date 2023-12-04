import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrainCarPassengerDoorOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 7H3C1.9 7 1 7.9 1 9V17H2C2 18.11 2.9 19 4 19C5.1 19 6 18.11 6 17H18C18 18.11 18.9 19 20 19C21.1 19 22 18.11 22 17H23V9C23 7.9 22.11 7 21 7ZM8 12H3V9H8V12ZM14 16H10V9H14V16ZM21 12H16V9H21V12Z" />
    </Svg>
  );
};