import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ForestIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 12L9 2L2 12H3.86L0 18H7V22H11V18H18L14.14 12H16ZM20.14 12H22L15 2L12.61 5.41L17.92 13H15.97L19.19 18H24L20.14 12ZM13 19H17V22H13V19Z" />
    </Svg>
  );
};
