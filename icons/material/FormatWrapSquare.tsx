import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatWrapSquareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 7L17 17H7L12 7ZM3 3H21V5H3V3ZM3 7H6V9H3V7ZM21 7V9H18V7H21ZM3 11H6V13H3V11ZM21 11V13H18V11H21ZM3 15H6V17H3V15ZM21 15V17H18V15H21ZM3 19H21V21H3V19Z" />
    </Svg>
  );
};
