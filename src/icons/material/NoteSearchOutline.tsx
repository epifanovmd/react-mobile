import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NoteSearchOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.0001 3H5.00011C3.89011 3 3.00011 3.89 3.00011 5V10.82C3.60011 10.24 4.28011 9.8 5.00011 9.5V5H12.0001V10.82C12.0301 10.85 12.0701 10.87 12.1001 10.9C12.4401 11.24 12.7301 11.61 12.9701 12H19.0001V19H12.9701C12.7301 19.39 12.4401 19.76 12.1001 20.1C11.7401 20.45 11.3501 20.74 10.9401 21H19.0001C20.1101 21 21.0001 20.11 21.0001 19V9L15.0001 3ZM14.0001 10V4.5L19.5001 10H14.0001ZM7.50011 11C5.00011 11 3.00011 13 3.00011 15.5C3.00011 16.38 3.25011 17.21 3.69011 17.9L0.610107 21L2.00011 22.39L5.12011 19.32C5.81011 19.75 6.63011 20 7.50011 20C10.0001 20 12.0001 18 12.0001 15.5C12.0001 13 10.0001 11 7.50011 11ZM7.50011 18C6.12011 18 5.00011 16.88 5.00011 15.5C5.00011 14.12 6.12011 13 7.50011 13C8.88011 13 10.0001 14.12 10.0001 15.5C10.0001 16.88 8.88011 18 7.50011 18Z" />
    </Svg>
  );
};
