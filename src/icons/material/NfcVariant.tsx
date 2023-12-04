import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NfcVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 6H13C12.4696 6 11.9609 6.21071 11.5858 6.58579C11.2107 6.96086 11 7.46957 11 8V10.28C10.41 10.62 10 11.26 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C13.11 14 14 13.1 14 12C14 11.26 13.6 10.62 13 10.28V8H16V16H8V8H10V6H8H6V18H18V6ZM20 20H4V4H20V20ZM20 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C21.11 22 22 21.1 22 20V4C22 2.89 21.11 2 20 2Z" />
    </Svg>
  );
};
