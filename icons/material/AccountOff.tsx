import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AccountOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 4C13.0609 4 14.0783 4.42143 14.8285 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.95 14.6 11.58 12.75 11.93L8.07003 7.25C8.42003 5.4 10.05 4 12 4ZM12.28 14L18.28 20L20 21.72L18.73 23L15.73 20H4.00003V18C4.00003 16.16 6.50003 14.61 9.87003 14.14L2.78003 7.05L4.05003 5.78L12.28 14ZM20 18V19.18L15.14 14.32C18 14.93 20 16.35 20 18Z" />
    </Svg>
  );
};
