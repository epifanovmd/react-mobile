import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowSplitVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 16V13H15V22H13V2H15V11H18V8L22 12L18 16ZM2 12L6 16V13H9V22H11V2H9V11H6V8L2 12Z" />
    </Svg>
  );
};
