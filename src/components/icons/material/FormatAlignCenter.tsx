import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatAlignCenterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 3H21V5H3V3ZM7 7H17V9H7V7ZM3 11H21V13H3V11ZM7 15H17V17H7V15ZM3 19H21V21H3V19Z" />
    </Svg>
  );
};
