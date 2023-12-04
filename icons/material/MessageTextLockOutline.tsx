import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MessageTextLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 3V2.5C23 1.12 21.88 0 20.5 0C19.12 0 18 1.12 18 2.5V3C17.45 3 17 3.45 17 4V8C17 8.55 17.45 9 18 9H23C23.55 9 24 8.55 24 8V4C24 3.45 23.55 3 23 3ZM22 3H19V2.5C19 1.67 19.67 1 20.5 1C21.33 1 22 1.67 22 2.5V3ZM6 11H15V13H6V11ZM6 7H15V9H6V7ZM22 11V16C22 17.11 21.11 18 20 18H6L2 22V4C2 2.89 2.9 2 4 2H15V4H4V17.17L5.17 16H20V11H22Z" />
    </Svg>
  );
};
