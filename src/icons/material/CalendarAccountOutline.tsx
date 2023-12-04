import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarAccountOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 4H18V2H16V4H8V2H6V4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 11C14 11 15 13.42 13.59 14.84C12.17 16.26 9.75 15.25 9.75 13.25C9.75 12 10.75 11 12 11ZM16.5 18.88V19H7.5V18.88C7.5 17.63 9.5 16.63 12 16.63C14.5 16.63 16.5 17.63 16.5 18.88Z" />
    </Svg>
  );
};
