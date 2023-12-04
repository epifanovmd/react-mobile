import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MessageLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 3V2.5C23 1.1 21.9 0 20.5 0C19.1 0 18 1.1 18 2.5V3C17.5 3 17 3.5 17 4V8C17 8.5 17.5 9 18 9H23C23.5 9 24 8.5 24 8V4C24 3.5 23.5 3 23 3ZM22 3H19V2.5C19 1.7 19.7 1 20.5 1C21.3 1 22 1.7 22 2.5V3ZM22 11V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H15V4H4V17.2L5.2 16H20V11H22Z" />
    </Svg>
  );
};
