import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RestoreAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3C8 3 4 7 4 12H1L4.9 15.9L5 16L9 12H6C6 8.1 9.1 5 13 5C16.9 5 20 8.1 20 12C20 15.9 16.9 19 13 19C11.1 19 9.3 18.2 8.1 16.9L6.7 18.3C8.3 20 10.5 21 13 21C18 21 22 17 22 12C22 7 18 3 13 3ZM12 15H14V17H12V15ZM12 7H14V13H12V7Z" />
    </Svg>
  );
};
