import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BugOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 8H17.19C16.74 7.2 16.12 6.5 15.37 6L17 4.41L15.59 3L13.42 5.17C12.96 5.06 12.5 5 12 5C11.5 5 11.05 5.06 10.59 5.17L8.41 3L7 4.41L8.62 6C7.87 6.5 7.26 7.21 6.81 8H4V10H6.09C6.03 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.03 15.67 6.09 16H4V18H6.81C8.47 20.87 12.14 21.84 15 20.18C15.91 19.66 16.67 18.9 17.19 18H20V16H17.91C17.97 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.97 10.33 17.91 10H20V8ZM16 15C16 16.0609 15.5786 17.0783 14.8284 17.8284C14.0783 18.5786 13.0609 19 12 19C10.9391 19 9.92172 18.5786 9.17157 17.8284C8.42143 17.0783 8 16.0609 8 15V11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11V15ZM14 10V12H10V10H14ZM10 14H14V16H10V14Z" />
    </Svg>
  );
};
