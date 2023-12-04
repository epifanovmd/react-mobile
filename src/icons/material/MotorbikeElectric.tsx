import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MotorbikeElectricIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17.42 8L13.41 4H9V6H12.59L14.59 8H6.5C4 8 2 10 2 12.5C2 15 4 17 6.5 17C8.72 17 10.56 15.38 10.92 13.27L13.04 12C13 12.17 13 12.33 13 12.5C13 15 15 17 17.5 17C20 17 22 15 22 12.5C22 10 20 8 17.5 8H17.42ZM8.84 13.26C8.5 14.27 7.58 15 6.47 15C5.09 15 3.97 13.88 3.97 12.5C3.97 11.12 5.09 10 6.47 10C7.59 10 8.5 10.74 8.84 11.75H6V13.25L8.84 13.26ZM17.47 15C16.09 15 14.97 13.88 14.97 12.5C14.97 11.12 16.09 10 17.47 10C18.85 10 19.97 11.12 19.97 12.5C19.97 13.88 18.85 15 17.47 15ZM11 20H7L13 23V21H17L11 18V20Z" />
    </Svg>
  );
};
