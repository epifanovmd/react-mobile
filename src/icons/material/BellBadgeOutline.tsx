import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellBadgeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 6.5C21 8.43 19.43 10 17.5 10C15.57 10 14 8.43 14 6.5C14 4.57 15.57 3 17.5 3C19.43 3 21 4.57 21 6.5ZM11.5 22C12.61 22 13.5 21.11 13.5 20H9.5C9.5 21.11 10.4 22 11.5 22ZM18 12C17.84 12 17.67 12 17.5 12C17 12 16.5 11.92 16 11.79V17H7V10.5C7 8 9 6 11.5 6C11.68 6 11.85 6.03 12 6.05C12.1 5.06 12.45 4.14 13 3.37C12.92 2.6 12.28 2 11.5 2C10.67 2 10 2.67 10 3.5V4.18C7.13 4.86 5 7.43 5 10.5V16L3 18V19H20V18L18 16V12Z" />
    </Svg>
  );
};
