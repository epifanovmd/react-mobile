import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LabelVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.5 17H15L18.5 12L15 7H6.5L10 12L6.5 17ZM15 19H3L7.5 12L3 5H15C15.69 5 16.23 5.3 16.64 5.86L21 12L16.64 18.14C16.23 18.7 15.69 19 15 19Z" />
    </Svg>
  );
};
