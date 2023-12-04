import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallSconceRoundOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 19V16H11V19H13ZM19.09 16.5L20.5 15.09L18.73 13.32L17.32 14.73L19.09 16.5ZM4.91 16.5L6.68 14.73L5.27 13.32L3.5 15.09L4.91 16.5ZM12 6C13.04 6 14.08 6.28 15 6.81C16.26 7.5 17.19 8.67 17.66 10H6.34C6.81 8.67 7.74 7.5 9 6.81C9.92 6.28 10.96 6 12 6ZM12 4C10.63 4 9.25 4.36 8 5.07C5.5 6.5 4 9.14 4 12H20C20 9.14 18.5 6.5 16 5.07C14.75 4.36 13.38 4 12 4Z" />
    </Svg>
  );
};
