import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ApplicationParenthesesOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2ZM21 20H3V6H21V20ZM15.6 8C17.1 9.3 18 11.1 18 13C18 14.9 17.1 16.7 15.6 18L14 17.4C15.3 16.4 16 14.7 16 13C16 11.3 15.3 9.6 14 8.6L15.6 8ZM8.4 8L10 8.6C8.7 9.6 8 11.3 8 13C8 14.7 8.7 16.4 10 17.4L8.4 18C6.9 16.7 6 14.9 6 13C6 11.1 6.9 9.3 8.4 8Z" />
    </Svg>
  );
};
