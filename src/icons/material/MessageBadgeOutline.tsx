import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MessageBadgeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 7V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H14.1C14 2.3 14 2.7 14 3C14 3.3 14 3.7 14.1 4H4V16H20V7.9C20.7 7.8 21.4 7.4 22 7ZM16 3C16 4.7 17.3 6 19 6C20.7 6 22 4.7 22 3C22 1.3 20.7 0 19 0C17.3 0 16 1.3 16 3Z" />
    </Svg>
  );
};
