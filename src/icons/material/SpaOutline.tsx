import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpaOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.5 9.63C14.21 10.32 13.03 11.2 12 12.26C10.97 11.19 9.79 10.31 8.5 9.63C8.74 6.86 9.92 4.14 12.06 2C14.18 4.12 15.31 6.84 15.5 9.63ZM12 15.45C14.15 12.17 17.82 10 22 10C22 20 12.68 21.88 12 22C11.32 21.89 2 20 2 10C6.18 10 9.85 12.17 12 15.45ZM12.05 5.19C11.39 6.23 10.93 7.38 10.68 8.58L12 9.55L13.35 8.57C13.12 7.37 12.68 6.22 12.05 5.19ZM12 19.97C12 19.97 18 19 19.74 12.25C14 14 12 19.1 12 19.1C12 19.1 9 13 4.26 12.26C6 19 12 19.97 12 19.97Z" />
    </Svg>
  );
};
