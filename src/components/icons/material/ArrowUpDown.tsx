import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowUpDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.45 17.55L12 23L6.55005 17.55L7.96005 16.14L11 19.17V4.83L7.96005 7.86L6.55005 6.45L12 1L17.45 6.45L16.04 7.86L13 4.83V19.17L16.04 16.14L17.45 17.55Z" />
    </Svg>
  );
};
