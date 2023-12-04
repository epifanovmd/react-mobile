import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MagnifyExpandIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 16H17.42L16.61 15.19C17.5 14 18 12.5 18 11C18 7.13 14.87 4 11 4C9.5 4 8 4.5 6.79 5.4C3.7 7.72 3.07 12.11 5.39 15.2C7.71 18.29 12.1 18.92 15.19 16.6L16 17.41V18L21 23L23 21L18 16ZM11 16C8.24 16 6 13.76 6 11C6 8.24 8.24 6 11 6C13.76 6 16 8.24 16 11C16 13.76 13.76 16 11 16ZM3 6L1 8V1H8L6 3H3V6ZM21 1V8L19 6V3H16L14 1H21ZM6 19L8 21H1V14L3 16V19H6Z" />
    </Svg>
  );
};
