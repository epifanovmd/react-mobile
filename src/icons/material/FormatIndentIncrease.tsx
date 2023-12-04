import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatIndentIncreaseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 13H21V11H11V13ZM11 9H21V7H11V9ZM3 3V5H21V3H3ZM11 17H21V15H11V17ZM3 8V16L7 12L3 8ZM3 21H21V19H3V21Z" />
    </Svg>
  );
};
