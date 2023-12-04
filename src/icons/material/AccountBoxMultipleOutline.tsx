import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountBoxMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6ZM18.5 14.25C18.5 12.75 15.5 12 14 12C12.5 12 9.5 12.75 9.5 14.25V15H18.5V14.25ZM14 10.25C15.24 10.25 16.25 9.24 16.25 8C16.25 6.76 15.24 5.75 14 5.75C12.76 5.75 11.75 6.76 11.75 8C11.75 9.24 12.76 10.25 14 10.25ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.89 21.1 2 20 2ZM20 16H8V4H20V16Z" />
    </Svg>
  );
};
