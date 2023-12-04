import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DebugStepOverIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.9999 14C12.5303 14 13.039 14.2107 13.4141 14.5858C13.7892 14.9609 13.9999 15.4696 13.9999 16C13.9999 16.5304 13.7892 17.0391 13.4141 17.4142C13.039 17.7893 12.5303 18 11.9999 18C11.4695 18 10.9608 17.7893 10.5857 17.4142C10.2106 17.0391 9.9999 16.5304 9.9999 16C9.9999 15.4696 10.2106 14.9609 10.5857 14.5858C10.9608 14.2107 11.4695 14 11.9999 14ZM23.4599 8.86L21.8699 15.75L14.9999 14.16L18.7999 11.78C17.3899 9.5 14.8699 8 11.9999 8C8.0499 8 4.7699 10.86 4.1199 14.63L2.1499 14.28C2.9599 9.58 7.0599 6 11.9999 6C15.5799 6 18.7299 7.89 20.4999 10.72L23.4599 8.86Z" />
    </Svg>
  );
};
