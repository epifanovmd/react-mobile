import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarMonthOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 12H9V14H7V12ZM21 6V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C3.89 22 3 21.1 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H6V2H8V4H16V2H18V4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM15 14V12H17V14H15ZM11 14V12H13V14H11ZM7 16H9V18H7V16ZM15 18V16H17V18H15ZM11 18V16H13V18H11Z" />
    </Svg>
  );
};
