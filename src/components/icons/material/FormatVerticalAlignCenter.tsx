import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatVerticalAlignCenterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 19H11V23H13V19H16L12 15L8 19ZM16 5H13V1H11V5H8L12 9L16 5ZM4 11V13H20V11H4Z" />
    </Svg>
  );
};
