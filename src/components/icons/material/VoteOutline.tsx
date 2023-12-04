import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VoteOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 12.9993L21 15.9993V19.9993C21 21.1093 20.1 21.9993 19 21.9993H5C3.89 21.9993 3 21.0993 3 19.9993V15.9993L6 12.9993H6.83L8.83 14.9993H6.78L5 16.9993H19L17.23 14.9993H15.32L17.32 12.9993H18ZM19 19.9993V18.9993H5V19.9993H19ZM11.34 14.9993L6.39 10.0693C6 9.67931 6 9.04931 6.39 8.65931L12.76 2.28931C13.15 1.89931 13.78 1.89931 14.16 2.29931L19.11 7.24931C19.5 7.63931 19.5 8.26931 19.11 8.65931L12.75 14.9993C12.36 15.4093 11.73 15.4093 11.34 14.9993ZM13.46 4.40931L8.5 9.35931L12.05 12.8993L17 7.94931L13.46 4.40931Z" />
    </Svg>
  );
};
