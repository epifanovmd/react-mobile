import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatWrapInlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 7L13 17H3L8 7ZM3 3H21V5H3V3ZM21 15V17H14V15H21ZM3 19H21V21H3V19Z" />
    </Svg>
  );
};
