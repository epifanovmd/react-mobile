import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountTieHatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 14.5C16 15.6 15.7 18 13.8 20.8L13 16L13.9 14.1C13.3 14.1 12.7 14 12 14C11.3 14 10.7 14.1 10.1 14.1L11 16L10.2 20.8C8.3 18.1 8 15.6 8 14.5C5.6 15.2 4 16.5 4 18V22H20V18C20 16.5 18.4 15.2 16 14.5ZM6 4.5C6 3.1 8.7 2 12 2C15.3 2 18 3.1 18 4.5C18 4.9 17.8 5.2 17.5 5.5C16.6 4.6 14.5 4 12 4C9.5 4 7.4 4.6 6.5 5.5C6.2 5.2 6 4.9 6 4.5ZM15.9 7.4C16 7.6 16 7.8 16 8C16 10.2 14.2 12 12 12C9.8 12 8 10.2 8 8C8 7.8 8 7.6 8.1 7.4C9.1 7.8 10.5 8 12 8C13.5 8 14.9 7.8 15.9 7.4ZM16.6 6.1C15.5 6.6 13.9 7 12 7C10.1 7 8.5 6.6 7.4 6.1C8.1 5.5 9.8 5 12 5C14.2 5 15.9 5.5 16.6 6.1Z" />
    </Svg>
  );
};
