import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AirplaneOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 22.73L18.0001 19.9L17.3801 20.53L16.0001 17.89L12.3501 14.24L9.60011 17L9.96011 19.47L8.89011 20.53L7.13011 17.35L3.94011 15.58L5.00011 14.5L7.50011 14.87L10.2301 12.12L6.59011 8.49998L3.94011 7.08998L4.57011 6.45998L1.11011 2.99998L2.39011 1.72998L22.1101 21.46L20.8401 22.73ZM16.6701 9.91998L20.5601 6.02998C21.1501 5.44998 21.1501 4.49998 20.5601 3.90998C19.9701 3.31998 19.0001 3.32998 18.4401 3.90998L14.5501 7.79998L9.94011 6.73998L17.7401 14.54L16.6701 9.91998Z" />
    </Svg>
  );
};
