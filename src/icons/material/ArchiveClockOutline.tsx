import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveClockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2H2V8H20V2ZM18 6H4V4H18V6ZM16 9C14.69 9 13.46 9.37 12.41 10H8.5C8.22 10 8 10.22 8 10.5V12H10.26C9.47 13.13 9 14.5 9 16C9 16.7 9.11 17.37 9.29 18H5V9H3V20H10.26C11.53 21.81 13.62 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9 16 9ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21ZM16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z" />
    </Svg>
  );
};
