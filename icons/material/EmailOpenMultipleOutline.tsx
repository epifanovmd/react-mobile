import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EmailOpenMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 7.99965V21.9996H20V23.9996H2C0.895 23.9996 0 23.1096 0 21.9996V7.99965H2ZM23.03 6.28965L14 0.639648L4.97 6.28965C4.39 6.63965 4 7.26965 4 7.99965V17.9996C4 19.0996 4.9 19.9996 6 19.9996H22C23.1 19.9996 24 19.0996 24 17.9996V7.99965C24 7.26965 23.61 6.63965 23.03 6.28965ZM22 17.9996H6V9.99965L14 14.9996L22 9.99965V17.9996ZM14 12.9996L6 7.99965L14 2.99965L22 7.99965L14 12.9996Z" />
    </Svg>
  );
};
