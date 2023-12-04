import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const VectorSquarePlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 19C13 18.7 13 18.3 13.1 18H8V16H6V8H8V6H16V8H18V13.1C18.3 13 18.7 13 19 13C19.3 13 19.7 13 20 13.1V8H22V2H16V4H8V2H2V8H4V16H2V22H8V20H13.1C13 19.7 13 19.3 13 19ZM18 4H20V6H18V4ZM4 4H6V6H4V4ZM6 20H4V18H6V20ZM20 15V18H23V20H20V23H18V20H15V18H18V15H20Z" />
    </Svg>
  );
};
