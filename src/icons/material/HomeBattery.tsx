import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeBatteryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.5 7.6C13.3 8 12.5 9 12.5 10.3V20H5V12H2L12 3L15.3 6H14.5V7.6ZM21.9 10.3V20.6C21.9 21.3 21.3 21.9 20.6 21.9H15.3C14.6 21.9 14 21.3 14 20.6V10.3C14 9.6 14.6 9 15.3 9H16V7.5H20V9H20.7C21.4 9 22 9.6 21.9 10.3ZM20 11H16V14H20V11Z" />
    </Svg>
  );
};
