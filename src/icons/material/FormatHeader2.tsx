import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatHeader2Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 4H5V10H9V4H11V18H9V12H5V18H3V4ZM21 18H15C14.4696 18 13.9609 17.7893 13.5858 17.4142C13.2107 17.0391 13 16.5304 13 16C13 15.47 13.2 15 13.54 14.64L18.41 9.41C18.78 9.05 19 8.55 19 8C19 7.46957 18.7893 6.96086 18.4142 6.58579C18.0391 6.21071 17.5304 6 17 6C16.4696 6 15.9609 6.21071 15.5858 6.58579C15.2107 6.96086 15 7.46957 15 8H13C13 6.93913 13.4214 5.92172 14.1716 5.17157C14.9217 4.42143 15.9391 4 17 4C18.0609 4 19.0783 4.42143 19.8284 5.17157C20.5786 5.92172 21 6.93913 21 8C21 9.1 20.55 10.1 19.83 10.83L15 16H21V18Z" />
    </Svg>
  );
};
