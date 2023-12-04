import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NfcVariantOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1.25 2.05L21.95 22.75L20.7 24L18.7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V5.3L0 3.3L1.25 2.05ZM3.81 2C3.87 2 3.94 2 4 2H20C21.11 2 22 2.89 22 4V20C22 20.06 22 20.13 22 20.19L20 18.2V4H5.8L3.81 2ZM6 9.3L4 7.3V20H16.7L14.7 18H6V9.3ZM18 16.2L16 14.2V8H13V10.28C13.6 10.62 14 11.26 14 12C14 12.06 14 12.13 14 12.19L11 9.2V8C11 7.46957 11.2107 6.96086 11.5858 6.58579C11.9609 6.21071 12.4696 6 13 6H18V16.2ZM8 16H12.7L8 11.3V16ZM10 8H9.8L7.8 6H10V8Z" />
    </Svg>
  );
};
