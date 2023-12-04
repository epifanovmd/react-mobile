import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.5 9C10.12 9 9 10.12 9 11.5C9 12.88 10.12 14 11.5 14C12.88 14 14 12.88 14 11.5C14 10.12 12.88 9 11.5 9ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM16.79 18.21L13.88 15.3C13.19 15.74 12.37 16 11.5 16C9 16 7 14 7 11.5C7 9 9 7 11.5 7C14 7 16 9 16 11.5C16 12.38 15.74 13.19 15.3 13.89L18.21 16.79L16.79 18.21Z" />
    </Svg>
  );
};
