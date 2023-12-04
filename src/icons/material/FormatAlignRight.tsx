import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatAlignRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 3H21V5H3V3ZM9 7H21V9H9V7ZM3 11H21V13H3V11ZM9 15H21V17H9V15ZM3 19H21V21H3V19Z" />
    </Svg>
  );
};
