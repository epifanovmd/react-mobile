import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 20L8.39995 15.2C9.39995 14.45 10.65 14 12 14C13.35 14 14.6 14.45 15.6 15.2L12 20ZM4.79995 10.4L6.59995 12.8C8.09995 11.67 9.96995 11 12 11C14.03 11 15.9 11.67 17.4 12.8L19.2 10.4C17.19 8.89 14.7 8 12 8C9.29995 8 6.80995 8.89 4.79995 10.4ZM12 2C7.94995 2 4.20995 3.34 1.19995 5.6L2.99995 8C5.49995 6.12 8.61995 5 12 5C15.38 5 18.5 6.12 21 8L22.7999 5.6C19.7899 3.34 16.05 2 12 2ZM6.99995 24H8.99995V22H6.99995V24ZM15 24H17V22H15V24ZM11 24H13V22H11V24Z" />
    </Svg>
  );
};
