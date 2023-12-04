import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatListChecksIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 5H9V11H3V5ZM5 7V9H7V7H5ZM11 7H21V9H11V7ZM11 15H21V17H11V15ZM5 20L1.5 16.5L2.91 15.09L5 17.17L9.59 12.59L11 14L5 20Z" />
    </Svg>
  );
};
