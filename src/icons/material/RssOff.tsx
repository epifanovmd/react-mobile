import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RssOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.5 3.77L3.78 2.5L21.5 20.22L20.23 21.5L18.73 20H16.73C16.73 19.25 16.67 18.5 16.54 17.81L6.19 7.46C5.5 7.33 4.75 7.27 4 7.27V5.27L2.5 3.77ZM6.18 15.64C6.75817 15.64 7.31266 15.8697 7.72149 16.2785C8.13032 16.6873 8.36 17.2418 8.36 17.82C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82C4 17.2418 4.22968 16.6873 4.63851 16.2785C5.04734 15.8697 5.60183 15.64 6.18 15.64ZM4 10.1C6.62564 10.1 9.14375 11.143 11.0004 12.9996C12.857 14.8563 13.9 17.3744 13.9 20H11.07C11.07 18.1249 10.3251 16.3266 8.99924 15.0008C7.67336 13.6749 5.87508 12.93 4 12.93V10.1ZM9.13 5.31C13.59 6.87 17.13 10.41 18.69 14.87L9.13 5.31Z" />
    </Svg>
  );
};
