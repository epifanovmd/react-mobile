import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CarDoorLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.8 17V15.5C7.8 14.1 6.4 13 5 13C3.6 13 2.2 14.1 2.2 15.5V17C1.6 17 1 17.6 1 18.2V21.7C1 22.4 1.6 23 2.2 23H7.7C8.4 23 9 22.4 9 21.8V18.3C9 17.6 8.4 17 7.8 17ZM6.5 17H3.5V15.5C3.5 14.7 4.2 14.2 5 14.2C5.8 14.2 6.5 14.7 6.5 15.5V17ZM21 3H11L3 11V11.44C3.61 11.17 4.29 11 5 11C7.6 11 9.8 13.06 9.8 15.5V15.75C10.53 16.36 11 17.28 11 18.3V21H22V4C22 3.45 21.55 3 21 3ZM19 16H16V14H19V16ZM20 11H5.83L11.83 5H20V11Z" />
    </Svg>
  );
};
