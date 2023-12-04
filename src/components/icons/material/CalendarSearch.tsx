import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CalendarSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14ZM19 8H5V19H9.5C9.81 19.75 10.26 20.42 10.81 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1H8V3H16V1H18V3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V13.03C20.5 12.22 19.8 11.54 19 11V8Z" />
    </Svg>
  );
};
