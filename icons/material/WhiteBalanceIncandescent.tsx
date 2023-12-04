import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const WhiteBalanceIncandescentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.24 18.15L19.04 19.95L20.45 18.53L18.66 16.74L17.24 18.15ZM20 12.5H23V10.5H20V12.5ZM15 6.31V1.5H9V6.31C7.21 7.35 6 9.28 6 11.5C6 13.0913 6.63214 14.6174 7.75736 15.7426C8.88258 16.8679 10.4087 17.5 12 17.5C13.5913 17.5 15.1174 16.8679 16.2426 15.7426C17.3679 14.6174 18 13.0913 18 11.5C18 9.28 16.79 7.35 15 6.31ZM4 10.5H1V12.5H4V10.5ZM11 22.45C11.32 22.45 13 22.45 13 22.45V19.5H11V22.45ZM3.55 18.53L4.96 19.95L6.76 18.15L5.34 16.74L3.55 18.53Z" />
    </Svg>
  );
};
