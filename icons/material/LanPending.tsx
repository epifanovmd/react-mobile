import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LanPendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 1C2.89 1 2 1.89 2 3V7C2 8.11 2.89 9 4 9H1V11H13V9H10C11.11 9 12 8.11 12 7V3C12 1.89 11.11 1 10 1H4ZM4 3H10V7H4V3ZM3 12V14H5V12H3ZM14 13C12.89 13 12 13.89 12 15V19C12 20.11 12.89 21 14 21H11V23H23V21H20C21.11 21 22 20.11 22 19V15C22 13.89 21.11 13 20 13H14ZM3 15V17H5V15H3ZM14 15H20V19H14V15ZM3 18V20H5V18H3ZM6 18V20H8V18H6ZM9 18V20H11V18H9Z" />
    </Svg>
  );
};
