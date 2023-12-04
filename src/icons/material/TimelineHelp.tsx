import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TimelineHelpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 2V8H2V2H4ZM2 22V16H4V22H2ZM5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12ZM24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6ZM16.5 15.5H15V17H16.5V15.5ZM14.5 10.5V10C14.5 9.17 15.17 8.5 16 8.5C16.83 8.5 17.5 9.18 17.5 10C17.5 10.47 17.27 10.9 16.88 11.16L16.59 11.35C15.6 12 15 13.11 15 14.3V14.5H16.5V14.3C16.5 13.62 16.84 13 17.41 12.6L17.71 12.41C18.5 11.88 19 10.97 19 10C19 8.34 17.66 7 16 7C14.34 7 13 8.34 13 10V10.5H14.5Z" />
    </Svg>
  );
};