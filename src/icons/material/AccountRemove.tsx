import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 14C17.67 14 23 15.33 23 18V20H6.99996V18C6.99996 15.33 12.33 14 15 14ZM15 12C13.9391 12 12.9217 11.5786 12.1715 10.8284C11.4214 10.0783 11 9.06087 11 8C11 6.93913 11.4214 5.92172 12.1715 5.17157C12.9217 4.42143 13.9391 4 15 4C16.0608 4 17.0782 4.42143 17.8284 5.17157C18.5785 5.92172 19 6.93913 19 8C19 9.06087 18.5785 10.0783 17.8284 10.8284C17.0782 11.5786 16.0608 12 15 12ZM4.99996 9.59L7.11996 7.46L8.53996 8.88L6.40996 11L8.53996 13.12L7.11996 14.54L4.99996 12.41L2.87996 14.54L1.45996 13.12L3.58996 11L1.45996 8.88L2.87996 7.46L4.99996 9.59Z" />
    </Svg>
  );
};
