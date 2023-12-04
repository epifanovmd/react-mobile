import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AccountAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 4C11.0609 4 12.0783 4.42143 12.8284 5.17157C13.5786 5.92172 14 6.93913 14 8C14 9.06087 13.5786 10.0783 12.8284 10.8284C12.0783 11.5786 11.0609 12 10 12C8.93913 12 7.92172 11.5786 7.17157 10.8284C6.42143 10.0783 6 9.06087 6 8C6 6.93913 6.42143 5.92172 7.17157 5.17157C7.92172 4.42143 8.93913 4 10 4ZM10 14C14.42 14 18 15.79 18 18V20H2V18C2 15.79 5.58 14 10 14ZM20 12V7H22V13H20V12ZM20 17V15H22V17H20Z" />
    </Svg>
  );
};
