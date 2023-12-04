import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.24 5H18V7.25C16.16 6.45 14.13 6 12 6C8.61995 6 5.49995 7.12 2.99995 9L1.19995 6.6C4.20995 4.34 7.94995 3 12 3C14.97 3 17.77 3.73 20.24 5ZM8.39995 16.2L12 21L15.6 16.2C14.6 15.45 13.35 15 12 15C10.65 15 9.39995 15.45 8.39995 16.2ZM4.79995 11.4L6.59995 13.8C8.09995 12.67 9.96995 12 12 12C14.03 12 15.9 12.67 17.4 13.8L18 13V10.62C16.2299 9.59 14.19 9 12 9C9.29995 9 6.80995 9.89 4.79995 11.4ZM20 17H22V15H20V17ZM20 7V13H22V7H20Z" />
    </Svg>
  );
};
