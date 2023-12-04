import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AirplaneClockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 9.00002C15.09 9.00002 14.23 9.18003 13.43 9.50002L12.73 6.45002L16.62 2.56002C17.2 2.00002 17.2 1.03002 16.62 0.440025C16.04 -0.149975 15.08 -0.145975 14.5 0.440025L10.61 4.33002L1.41 2.21002L0 3.62002L7.43 7.50002L3.54 11.4L1.06 11.05L0 12.11L3.18 13.87L4.95 17.06L6 16L5.66 13.5L9.55 9.63002L10.57 11.59C9.59 12.79 9 14.33 9 16C9 19.87 12.13 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9.00002 16 9.00002ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21ZM16.5 16.25V12H15V17L18.61 19.16L19.36 17.94L16.5 16.25Z" />
    </Svg>
  );
};
