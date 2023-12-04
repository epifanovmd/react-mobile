import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const UmbrellaClosedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C11.6 2 11.3 2.2 11.1 2.6L6.5 15H11V19C11 19.6 10.6 20 10 20C9.4 20 9 19.6 9 19V18H7V19C7 20.7 8.3 22 10 22C11.7 22 13 20.7 13 19V15H17.5L12.9 2.6C12.7 2.2 12.4 2 12 2Z" />
    </Svg>
  );
};
