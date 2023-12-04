import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HorseVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 8V16L17 17L13.91 11.5C13.65 11.04 12.92 11.27 13 11.81L14 21L4 17L5.15 8.94C5.64 5.53 8.56 3 12 3H20L18.42 5.37C19.36 5.88 20 6.86 20 8Z" />
    </Svg>
  );
};
