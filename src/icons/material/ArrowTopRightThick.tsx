import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowTopRightThickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.49994 18.3099L5.68994 15.4999L12.0599 9.11994H7.10994V5.68994H18.3099V16.8899H14.8899V11.9399L8.49994 18.3099Z" />
    </Svg>
  );
};
