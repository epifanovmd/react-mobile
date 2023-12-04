import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatHorizontalAlignCenterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 16V13H23V11H19V8L15 12L19 16ZM5 8V11H1V13H5V16L9 12L5 8ZM11 20H13V4H11V20Z" />
    </Svg>
  );
};
