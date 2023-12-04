import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ApplicationParenthesesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2ZM10 19.4L8.4 20C6.9 18.6 6 16.6 6 14.5C6 12.4 6.9 10.4 8.4 9L10 9.6C8.7 10.7 8 12.6 8 14.5C8 16.4 8.7 18.2 10 19.4ZM15.6 20L14 19.4C15.3 18.2 16 16.4 16 14.5C16 12.6 15.3 10.8 14 9.6L15.6 9C17.1 10.4 18 12.4 18 14.5C18 16.6 17.1 18.6 15.6 20ZM21 7H3V4H21V7Z" />
    </Svg>
  );
};
