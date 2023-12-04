import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanCapacityIncreaseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 4C16 2.9 16.9 2 18 2C19.1 2 20 2.9 20 4C20 5.1 19.1 6 18 6C16.9 6 16 5.1 16 4ZM20.78 7.58C19.93 7.21 19 7 18 7C17.33 7 16.69 7.1 16.08 7.28C16.66 7.83 17 8.6 17 9.43V10H22V9.43C22 8.62 21.5 7.9 20.78 7.58ZM6 6C7.1 6 8 5.1 8 4C8 2.9 7.1 2 6 2C4.9 2 4 2.9 4 4C4 5.1 4.9 6 6 6ZM7.92 7.28C7.31 7.1 6.67 7 6 7C5 7 4.07 7.21 3.22 7.58C2.5 7.9 2 8.62 2 9.43V10H7V9.43C7 8.6 7.34 7.83 7.92 7.28ZM10 4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4ZM16 10H8V9.43C8 8.62 8.5 7.9 9.22 7.58C10.07 7.21 11 7 12 7C13 7 13.93 7.21 14.78 7.58C15.5 7.9 16 8.62 16 9.43V10ZM15 16C15 14.9 15.9 14 17 14C18.1 14 19 14.9 19 16C19 17.1 18.1 18 17 18C15.9 18 15 17.1 15 16ZM21 22H13V21.43C13 20.62 13.5 19.9 14.22 19.58C15.07 19.21 16 19 17 19C18 19 18.93 19.21 19.78 19.58C20.5 19.9 21 20.62 21 21.43V22ZM5 16C5 14.9 5.9 14 7 14C8.1 14 9 14.9 9 16C9 17.1 8.1 18 7 18C5.9 18 5 17.1 5 16ZM11 22H3V21.43C3 20.62 3.5 19.9 4.22 19.58C5.07 19.21 6 19 7 19C8 19 8.93 19.21 9.78 19.58C10.5 19.9 11 20.62 11 21.43V22ZM12.75 14V16H11.25V14H9L12 11L15 14H12.75Z" />
    </Svg>
  );
};
