import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AirConditionerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.59 0.660005C8.93 -1.14999 11.47 1.06001 12.04 4.50001C12.47 4.50001 12.89 4.62001 13.27 4.84001C13.79 4.24001 14.25 3.42001 14.07 2.50001C13.65 0.350005 16.06 -1.38999 18.35 1.58001C20.16 3.92001 17.95 6.46001 14.5 7.03001C14.5 7.46001 14.39 7.89001 14.16 8.27001C14.76 8.78001 15.58 9.24001 16.5 9.06001C18.63 8.64001 20.38 11.04 17.41 13.34C15.07 15.15 12.53 12.94 11.96 9.5C11.53 9.5 11.11 9.37 10.74 9.15C10.22 9.75 9.75 10.58 9.93 11.5C10.35 13.64 7.94 15.39 5.65 12.42C3.83 10.07 6.05 7.53 9.5 6.97001C9.5 6.54001 9.63 6.12001 9.85 5.74001C9.25 5.23001 8.43 4.76001 7.5 4.94001C5.37 5.36001 3.62 2.96001 6.59 0.660005ZM5 16H7C7.53043 16 8.03914 16.2107 8.41421 16.5858C8.78929 16.9609 9 17.4696 9 18V24H7V22H5V24H3V18C3 17.4696 3.21071 16.9609 3.58579 16.5858C3.96086 16.2107 4.46957 16 5 16ZM5 18V20H7V18H5ZM12.93 16H15L12.07 24H10L12.93 16ZM18 16H21V18H18V22H21V24H18C17.4696 24 16.9609 23.7893 16.5858 23.4142C16.2107 23.0391 16 22.5304 16 22V18C16 17.4696 16.2107 16.9609 16.5858 16.5858C16.9609 16.2107 17.4696 16 18 16Z" />
    </Svg>
  );
};
