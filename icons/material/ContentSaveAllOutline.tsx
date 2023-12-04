import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ContentSaveAllOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 7H3V21H17V23H3C1.9 23 1 22.11 1 21V7ZM19 1H7C5.89 1 5 1.9 5 3V17C5 18.1 5.89 19 7 19H21C22.1 19 23 18.1 23 17V5L19 1ZM21 17H7V3H18.17L21 5.83V17ZM14 10C12.34 10 11 11.34 11 13C11 14.66 12.34 16 14 16C15.66 16 17 14.66 17 13C17 11.34 15.66 10 14 10ZM8 4H17V8H8V4Z" />
    </Svg>
  );
};
