import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LabelVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3.5 19L8.34 12L3.5 5H14.5C15.17 5 15.72 5.3 16.13 5.86L20.5 12L16.13 18.14C15.72 18.7 15.17 19 14.5 19H3.5Z" />
    </Svg>
  );
};
