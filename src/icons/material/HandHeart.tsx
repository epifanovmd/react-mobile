import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandHeartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 17C20.5733 17 21.0567 17.2 21.45 17.6C21.8433 18 22.0367 18.4667 22.03 19L14 22L7.00001 20V11H8.95001L16.22 13.69C16.74 13.8967 17 14.27 17 14.81C17 15.1233 16.8867 15.3967 16.66 15.63C16.4333 15.8633 16.1467 15.9867 15.8 16H13L11.25 15.33L10.92 16.27L13 17H20ZM16 3.23C16.7067 2.41 17.6067 2 18.7 2C19.6067 2 20.3733 2.33333 21 3C21.6267 3.66667 21.96 4.43333 22 5.3C22 5.98667 21.6667 6.80667 21 7.76C20.3333 8.71333 19.6767 9.51 19.03 10.15C18.3833 10.79 17.3733 11.74 16 13C14.6133 11.74 13.5933 10.79 12.94 10.15C12.2867 9.51 11.63 8.71333 10.97 7.76C10.31 6.80667 9.98668 5.98667 10 5.3C10 4.39333 10.3233 3.62667 10.97 3C11.6167 2.37333 12.3967 2.04 13.31 2C14.3767 2 15.2733 2.41 16 3.23ZM0.984009 11H5.00001V22H0.984009V11Z" />
    </Svg>
  );
};
