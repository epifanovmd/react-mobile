import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatAlignMiddleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 6L15 4L16.42 5.42L12 9.84L7.58 5.42L9 4L11 6V2H13V6ZM3 11H21V13H3V11ZM13 18V22H11V18L9 20L7.58 18.58L12 14.16L16.42 18.58L15 20L13 18Z" />
    </Svg>
  );
};
