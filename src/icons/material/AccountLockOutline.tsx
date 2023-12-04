import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12ZM10 6C11.11 6 12 6.9 12 8C12 9.1 11.11 10 10 10C8.89 10 8 9.11 8 8C8 6.89 8.9 6 10 6ZM12 20H2V17C2 14.33 7.33 13 10 13C11 13 12.38 13.19 13.71 13.56C13.41 14.12 13.23 14.74 13.21 15.39C12.23 15.1 11.11 14.9 10 14.9C7.03 14.9 3.9 16.36 3.9 17V18.1H12C12 18.13 12 18.17 12 18.2V20ZM20.8 17V15.5C20.8 14.1 19.4 13 18 13C16.6 13 15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17ZM19.5 17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2C18.8 14.2 19.5 14.7 19.5 15.5V17Z" />
    </Svg>
  );
};
