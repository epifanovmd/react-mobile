import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CalendarSyncIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 11V12.5C21.19 12.5 23.09 16.05 21.33 18.71L20.24 17.62C21.06 15.96 19.85 14 18 14V15.5L15.75 13.25L18 11ZM18 22V20.5C14.81 20.5 12.91 16.95 14.67 14.29L15.76 15.38C14.94 17.04 16.15 19 18 19V17.5L20.25 19.75L18 22ZM19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H14C13.36 20.45 12.86 19.77 12.5 19H5V8H19V10.59C19.71 10.7 20.39 10.94 21 11.31V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z" />
    </Svg>
  );
};
