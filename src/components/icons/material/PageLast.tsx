import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PageLastIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.59009 7.41L10.1801 12L5.59009 16.59L7.00009 18L13.0001 12L7.00009 6L5.59009 7.41ZM16.0001 6H18.0001V18H16.0001V6Z" />
    </Svg>
  );
};
