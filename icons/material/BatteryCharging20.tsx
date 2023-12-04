import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BatteryCharging20Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23.05 11H20.05V4L15.05 14H18.05V22L23.05 11ZM12.05 17H4.05005V6H12.05V17ZM12.72 4H11.05V2H5.05005V4H3.38005C3.02731 4 2.68902 4.14012 2.4396 4.38955C2.19017 4.63897 2.05005 4.97726 2.05005 5.33V20.67C2.05005 21.4 2.65005 22 3.38005 22H12.72C13.45 22 14.05 21.4 14.05 20.67V5.33C14.05 4.97726 13.9099 4.63897 13.6605 4.38955C13.4111 4.14012 13.0728 4 12.72 4Z" />
    </Svg>
  );
};
