import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const WifiArrowUpDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 12C9.96995 12 8.09995 12.67 6.59995 13.8L4.79995 11.4C6.80995 9.89 9.29995 9 12 9C14.7 9 17.19 9.89 19.2 11.4L17.92 13.1C17.5499 13.17 17.18 13.27 16.84 13.41C15.44 12.5 13.78 12 12 12ZM21 9L22.7999 6.6C19.7899 4.34 16.05 3 12 3C7.94995 3 4.20995 4.34 1.19995 6.6L2.99995 9C5.49995 7.12 8.61995 6 12 6C15.38 6 18.5 7.12 21 9ZM12 15C10.65 15 9.39995 15.45 8.39995 16.2L12 21L13.04 19.61C13 19.41 13 19.21 13 19C13 17.66 13.44 16.43 14.19 15.43C13.5 15.16 12.77 15 12 15ZM17 15L14.5 18H16V22H18V18H19.5L17 15ZM22 20V16H20V20H18.5L21 23L23.5 20H22Z" />
    </Svg>
  );
};