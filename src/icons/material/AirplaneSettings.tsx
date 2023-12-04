import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirplaneSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.09 4.56L16.2 8.45L18.32 17.64L16.91 19.06L13 11.63L9.12997 15.5L9.49997 18L8.41997 19.06L6.64997 15.87L3.46997 14.11L4.52997 13.04L6.99997 13.4L10.9 9.5L3.46997 5.62L4.88997 4.21L14.08 6.33L17.97 2.44C18.55 1.85 19.5 1.85 20.09 2.44C20.68 3 20.68 3.97 20.09 4.56ZM6.99997 24H8.99997V22H6.99997V24ZM11 24H13V22H11V24ZM15 24H17V22H15V24Z" />
    </Svg>
  );
};
