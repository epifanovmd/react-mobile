import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToggleSwitchOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 6H7C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18H17C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM17 16H7C4.79 16 3 14.21 3 12C3 9.79 4.79 8 7 8H17C19.21 8 21 9.79 21 12C21 14.21 19.21 16 17 16ZM7 9C5.34 9 4 10.34 4 12C4 13.66 5.34 15 7 15C8.66 15 10 13.66 10 12C10 10.34 8.66 9 7 9Z" />
    </Svg>
  );
};