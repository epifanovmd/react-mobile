import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CalendarLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 21C13 21.35 13.07 21.69 13.18 22H5C3.9 22 3 21.11 3 20V6C3 4.89 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.89 21 6V11.78C20.42 11.38 19.74 11.13 19 11.05V9H5V20H13V21ZM22 17V21C22 21.55 21.55 22 21 22H16C15.45 22 15 21.55 15 21V17C15 16.45 15.45 16 16 16V15.5C16 14.12 17.12 13 18.5 13C19.88 13 21 14.12 21 15.5V16C21.55 16 22 16.45 22 17ZM20 15.5C20 14.67 19.33 14 18.5 14C17.67 14 17 14.67 17 15.5V16H20V15.5Z" />
    </Svg>
  );
};
