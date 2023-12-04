import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MaterialDesignIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 12C21 9.97 20.33 8.09 19 6.38V17.63C20.33 15.97 21 14.09 21 12ZM17.63 19H6.38C7.06 19.55 7.95 20 9.05 20.41C10.14 20.8 11.13 21 12 21C12.88 21 13.86 20.8 14.95 20.41C16.05 20 16.94 19.55 17.63 19ZM11 17L7 9V17H11ZM17 9L13 17H17V9ZM12 14.53L15.75 7H8.25L12 14.53ZM17.63 5C15.97 3.67 14.09 3 12 3C9.91 3 8.03 3.67 6.38 5H17.63ZM5 17.63V6.38C3.67 8.09 3 9.97 3 12C3 14.09 3.67 15.97 5 17.63ZM23 12C23 15.03 21.94 17.63 19.78 19.78C17.63 21.94 15.03 23 12 23C8.97 23 6.38 21.94 4.22 19.78C2.06 17.63 1 15.03 1 12C1 8.97 2.06 6.38 4.22 4.22C6.38 2.06 8.97 1 12 1C15.03 1 17.63 2.06 19.78 4.22C21.94 6.38 23 8.97 23 12Z" />
    </Svg>
  );
};
