import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TimelineHelpOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12ZM4 2V8H2V2H4ZM2 22V16H4V22H2ZM24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6ZM22 6H10V10.83L8.83 12L10 13.17V18H22V6ZM16.5 15.5V17H15V15.5H16.5ZM14.5 10.5H13V10C13 8.34 14.34 7 16 7C17.66 7 19 8.34 19 10C19 10.97 18.5 11.88 17.71 12.41L17.41 12.6C16.84 13 16.5 13.62 16.5 14.3V14.5H15V14.3C15 13.11 15.6 12 16.59 11.35L16.88 11.16C17.27 10.9 17.5 10.47 17.5 10C17.5 9.18 16.83 8.5 16 8.5C15.17 8.5 14.5 9.17 14.5 10V10.5Z" />
    </Svg>
  );
};
