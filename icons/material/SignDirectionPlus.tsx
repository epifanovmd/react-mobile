import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SignDirectionPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 20H13.09C13.1977 20.7071 13.4422 21.3865 13.81 22H9C9 21.4696 9.21071 20.9609 9.58579 20.5858C9.96086 20.2107 10.4696 20 11 20V12H3.5L6 9.5L3.5 7H11V3L12 2L13 3V7H18L20.5 9.5L18 12H13V20ZM18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" />
    </Svg>
  );
};
