import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpeedometerMediumIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 1.38086L9.14 12.0609C8.8 13.1009 9.04 14.2909 9.86 15.1209C11.04 16.2909 12.94 16.2909 14.11 15.1209C14.9 14.3309 15.16 13.2009 14.89 12.2109L12 1.38086ZM14.6 3.35086L15.22 5.68086C18.04 6.92086 20 9.73086 20 13.0009C20 15.2109 19.11 17.2109 17.66 18.6509H17.65C17.26 19.0409 17.26 19.6709 17.65 20.0609C18.04 20.4509 18.68 20.4509 19.07 20.0709C20.88 18.2609 22 15.7609 22 13.0009C22 8.38086 18.86 4.50086 14.6 3.35086ZM9.4 3.36086C5.15 4.50086 2 8.40086 2 13.0009C2 15.7609 3.12 18.2609 4.93 20.0709C5.32 20.4509 5.95 20.4509 6.34 20.0609C6.73 19.6709 6.73 19.0409 6.34 18.6509C4.89 17.2009 4 15.2109 4 13.0009C4 9.65086 5.94 6.86086 8.79 5.65086" />
    </Svg>
  );
};
