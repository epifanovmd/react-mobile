import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScoreboardOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM5 7H9C9.6 7 10 7.4 10 8V16C10 16.6 9.6 17 9 17H5C4.4 17 4 16.6 4 16V8C4 7.4 4.4 7 5 7ZM6 9V15H8V9H6ZM15 7H19C19.6 7 20 7.4 20 8V16C20 16.6 19.6 17 19 17H15C14.4 17 14 16.6 14 16V8C14 7.4 14.4 7 15 7ZM16 9V15H18V9H16ZM12 11C12.6 11 13 10.6 13 10C13 9.4 12.6 9 12 9C11.4 9 11 9.4 11 10C11 10.6 11.4 11 12 11ZM12 15C12.6 15 13 14.6 13 14C13 13.4 12.6 13 12 13C11.4 13 11 13.4 11 14C11 14.6 11.4 15 12 15Z" />
    </Svg>
  );
};