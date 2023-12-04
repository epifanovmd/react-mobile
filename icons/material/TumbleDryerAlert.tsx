import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TumbleDryerAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 2H16C17.11 2 18 2.9 18 4V20C18 21.11 17.11 22 16 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2ZM5 4C4.45 4 4 4.45 4 5C4 5.55 4.45 6 5 6C5.55 6 6 5.55 6 5C6 4.45 5.55 4 5 4ZM8 4C7.45 4 7 4.45 7 5C7 5.55 7.45 6 8 6C8.55 6 9 5.55 9 5C9 4.45 8.55 4 8 4ZM10 8C6.69 8 4 10.69 4 14C4 17.31 6.69 20 10 20C13.31 20 16 17.31 16 14C16 10.69 13.31 8 10 8ZM6.11 10.5H8C7.76 11.88 8 12.67 8.58 13.29C9.68 14.36 10.16 15.71 9.89 17.5H8C8.24 16.12 8 15.33 7.42 14.71C6.32 13.64 5.85 12.29 6.11 10.5ZM10.11 10.5H12C11.76 11.88 12 12.67 12.58 13.29C13.68 14.36 14.16 15.71 13.89 17.5H12C12.24 16.12 12 15.33 11.42 14.71C10.32 13.64 9.85 12.29 10.11 10.5ZM20 15H22V17H20V15ZM20 7H22V13H20V7Z" />
    </Svg>
  );
};
