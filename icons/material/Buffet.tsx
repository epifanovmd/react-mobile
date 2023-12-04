import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BuffetIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 14C9.55 14 10 14.45 10 15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14ZM15 14C15.55 14 16 14.45 16 15C16 15.55 15.55 16 15 16C14.45 16 14 15.55 14 15C14 14.45 14.45 14 15 14ZM3 22L4 19H3C2.45 19 2 18.55 2 18V12C2 11.45 2.45 11 3 11H21C21.55 11 22 11.45 22 12V18C22 18.55 21.55 19 21 19H20L21 22H19L18 19H6L5 22H3ZM13 13V17H20V13H13ZM4 13V17H11V13H4Z" />
    </Svg>
  );
};