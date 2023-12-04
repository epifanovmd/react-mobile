import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ApproximatelyEqualIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.9 9.19995C18.1 10.1 16.6 11 15 11C13.5 11 12.6 10.5 11.8 10.1C11 9.79995 10.2 9.29995 8.9 9.29995C7.7 9.29995 6.6 9.99995 6 10.6L5 9.09995C5.9 8.19995 7.3 7.19995 8.9 7.19995C10.4 7.19995 11.3 7.79995 12.1 8.09995C12.9 8.39995 13.7 8.99995 15 8.99995C16.2 8.99995 17.3 8.19995 17.9 7.59995L18.9 9.19995ZM19 14.1C18.1 15 16.7 16 15.1 16C13.6 16 12.7 15.5 11.9 15.1C11.1 14.8 10.3 14.2 9 14.2C7.8 14.2 6.7 15 6.1 15.6L5.1 14C6 13.1 7.4 12.1 9 12.1C10.5 12.1 11.4 12.6 12.2 13C13 13.3 13.8 13.8 15.1 13.8C16.3 13.8 17.4 13 18 12.4L19 14.1Z" />
    </Svg>
  );
};
