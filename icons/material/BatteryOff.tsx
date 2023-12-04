import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BatteryOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.0001 14.8L7.21011 4H9.00011V2H15.0001V4H16.6701C17.022 4.00262 17.3588 4.14358 17.6077 4.39244C17.8565 4.6413 17.9975 4.97807 18.0001 5.33V14.8ZM18.0001 17.35L3.38011 2.73L2.11011 4L6.00011 7.89V20.67C6.00272 21.0219 6.14369 21.3587 6.39255 21.6076C6.64141 21.8564 6.97818 21.9974 7.33011 22H16.6701C17.022 21.9974 17.3588 21.8564 17.6077 21.6076C17.8565 21.3587 17.9975 21.0219 18.0001 20.67V19.89L20.8401 22.73L22.1101 21.46L18.0001 17.35Z" />
    </Svg>
  );
};
