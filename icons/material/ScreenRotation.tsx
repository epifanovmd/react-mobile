import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ScreenRotationIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.50005 21.5C4.25005 19.94 1.91005 16.76 1.55005 13H0.0500488C0.560049 19.16 5.71005 24 12 24L12.66 23.97L8.85005 20.16L7.50005 21.5ZM14.83 21.19L2.81005 9.17L9.17005 2.81L21.1901 14.83L14.83 21.19ZM10.23 1.75C9.64005 1.16 8.69005 1.16 8.11005 1.75L1.75005 8.11C1.16005 8.7 1.16005 9.65 1.75005 10.23L13.77 22.25C14.36 22.84 15.31 22.84 15.89 22.25L22.25 15.89C22.84 15.3 22.84 14.35 22.25 13.77L10.23 1.75ZM16.5 2.5C19.75 4.07 22.09 7.24 22.4501 11H23.9501C23.4401 4.84 18.29 0 12 0L11.34 0.03L15.15 3.84L16.5 2.5Z" />
    </Svg>
  );
};
