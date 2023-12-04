import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ReplyAllOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 9.8V10.7L12.7 10.9C15.3 11.3 17.2 12.3 18.6 13.6C16.9 13.1 15.1 12.8 13 12.8H11V14.1L8.8 12L11 9.8ZM13 5L6 12L13 19V14.9C18 14.9 21.5 16.5 24 20C23 15 20 10 13 9V5ZM7 8V5L0 12L7 19V16L3 12" />
    </Svg>
  );
};
