import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiLockOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 6C8.61995 6 5.49995 7.12 2.99995 9L1.19995 6.6C4.20995 4.34 7.94995 3 12 3C16.05 3 19.7899 4.34 22.7999 6.6L21 9C18.5 7.12 15.38 6 12 6ZM16.31 9.81C14.97 9.29 13.5 9 12 9C9.29995 9 6.80995 9.89 4.79995 11.4L6.59995 13.8C8.09995 12.67 9.96995 12 12 12C12.83 12 13.63 12.12 14.39 12.33C14.7 11.3 15.38 10.41 16.31 9.81ZM8.39995 16.2L12 21L13 19.67V17.2C13 16.5 13.27 15.81 13.7 15.26C13.16 15.1 12.59 15 12 15C10.65 15 9.39995 15.45 8.39995 16.2ZM21.7999 16H17.5V13.5C17.5 12.7 18.2 12.2 19 12.2C19.7999 12.2 20.5 12.7 20.5 13.5V14H21.7999V13.5C21.7999 12.1 20.4 11 19 11C17.6 11 16.2 12.1 16.2 13.5V16C15.6 16 15 16.6 15 17.2V20.7C15 21.4 15.6 22 16.2 22H21.7C22.4 22 23 21.4 23 20.8V17.3C23 16.6 22.4 16 21.7999 16Z" />
    </Svg>
  );
};
