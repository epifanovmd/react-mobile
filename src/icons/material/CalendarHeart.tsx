import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarHeartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 20V9H5V20H19ZM16 2H18V4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H6V2H8V4H16V2ZM12 18.17L11.42 17.64C9.36 15.77 8 14.54 8 13.03C8 11.8 8.97 10.83 10.2 10.83C10.9 10.83 11.56 11.15 12 11.66C12.44 11.15 13.1 10.83 13.8 10.83C15.03 10.83 16 11.8 16 13.03C16 14.54 14.64 15.77 12.58 17.64L12 18.17Z" />
    </Svg>
  );
};
