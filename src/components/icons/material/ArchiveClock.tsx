import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArchiveClockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 6H2V2H20V6ZM16.5 12H15V17L18.61 19.16L19.36 17.94L16.5 16.25V12ZM23 16C23 19.87 19.87 23 16 23C13.62 23 11.53 21.81 10.26 20H3V7H19V9.68C21.36 10.81 23 13.21 23 16ZM8 12H10.26C10.83 11.19 11.56 10.5 12.41 10H8.5C8.22 10 8 10.22 8 10.5V12ZM21 16C21 13.24 18.76 11 16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.76 21 21 18.76 21 16Z" />
    </Svg>
  );
};
