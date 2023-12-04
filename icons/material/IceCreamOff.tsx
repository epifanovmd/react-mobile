import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const IceCreamOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.11 21.46L2.38999 1.73L1.10999 3L4.94999 6.84C4.36999 7.38 3.99999 8.14 3.99999 9C3.99999 10.66 5.33999 12 6.99999 12L12 22L14.7 16.59L20.84 22.73L22.11 21.46ZM12 17.53L8.88999 11.31C8.94999 11.26 8.99999 11.21 9.07999 11.16C9.20998 11.24 9.34999 11.3 9.49999 11.37L13.21 15.1L12 17.53ZM7.14999 3.95C8.06999 2.2 9.88999 1 12 1C14.89 1 17.25 3.22 17.5 6.05C18.91 6.28 20 7.5 20 9C20 10.66 18.66 12 17 12L16.4 13.2L7.14999 3.95Z" />
    </Svg>
  );
};
