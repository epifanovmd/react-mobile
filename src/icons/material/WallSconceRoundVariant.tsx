import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallSconceRoundVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 5V8H13V5H11ZM4.91 7.5L3.5 8.91L5.27 10.68L6.68 9.27L4.91 7.5ZM19.09 7.5L17.32 9.27L18.73 10.68L20.5 8.91L19.09 7.5ZM4 12C4 14.86 5.5 17.5 8 18.93C10.5 20.36 13.5 20.36 16 18.93C18.5 17.5 20 14.86 20 12H4Z" />
    </Svg>
  );
};
