import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AccountLockOpenOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12ZM10 6C11.11 6 12 6.9 12 8C12 9.1 11.11 10 10 10C8.89 10 8 9.11 8 8C8 6.89 8.9 6 10 6ZM12 20H2V17C2 14.33 7.33 13 10 13C10.91 13 12.13 13.16 13.35 13.47C13.26 13.8 13.2 14.15 13.2 14.5V15.39C12.22 15.1 11.1 14.9 10 14.9C7.03 14.9 3.9 16.36 3.9 17V18.1H12C12 18.13 12 18.17 12 18.2V20ZM20.8 17H16.5V14.5C16.5 13.7 17.2 13.2 18 13.2C18.8 13.2 19.5 13.7 19.5 14.5V15H20.8V14.5C20.8 13.1 19.4 12 18 12C16.6 12 15.2 13.1 15.2 14.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17Z" />
    </Svg>
  );
};
