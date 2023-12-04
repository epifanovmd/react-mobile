import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BatteryCharging100Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 11H20V4L15 14H18V22L23 11ZM12.67 4H11V2H5V4H3.33C2.97726 4 2.63897 4.14012 2.38955 4.38955C2.14012 4.63897 2 4.97726 2 5.33V20.67C2 21.4 2.6 22 3.33 22H12.67C13.4 22 14 21.4 14 20.67V5.33C14 4.97726 13.8599 4.63897 13.6105 4.38955C13.361 4.14012 13.0227 4 12.67 4Z" />
    </Svg>
  );
};
