import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ReflectVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.9999 23H5.99993C5.60993 23 5.25993 22.79 5.08993 22.45C4.91993 22.11 4.95993 21.7 5.18993 21.4L11.1999 13.38C11.5799 12.87 12.4199 12.87 12.7999 13.38L18.8099 21.4C19.0399 21.7 19.0799 22.11 18.9099 22.45C18.7399 22.79 18.3899 23 17.9999 23ZM17.9999 1C18.3899 1 18.7399 1.21 18.9099 1.55C19.0799 1.89 19.0399 2.3 18.8099 2.6L12.7999 10.62C12.4199 11.13 11.5799 11.13 11.1999 10.62L5.18993 2.6C4.95993 2.3 4.91993 1.89 5.08993 1.55C5.25993 1.21 5.60993 1 5.99993 1H17.9999ZM7.99993 3L11.9999 8.35L15.9999 3H7.99993Z" />
    </Svg>
  );
};
