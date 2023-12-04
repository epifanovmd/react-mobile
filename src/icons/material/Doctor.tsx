import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DoctorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.84 16.26C17.86 16.83 20 18.29 20 20V22H4V20C4 18.29 6.14 16.83 9.16 16.26L12 21L14.84 16.26ZM8 8H16V10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10V8ZM8 7L8.41 2.9C8.46 2.39 8.89 2 9.41 2H14.6C15.11 2 15.54 2.39 15.59 2.9L16 7H8ZM12 3H11V4H10V5H11V6H12V5H13V4H12V3Z" />
    </Svg>
  );
};
