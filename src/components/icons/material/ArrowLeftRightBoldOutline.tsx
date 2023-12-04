import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowLeftRightBoldOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 16V22L24 12L14 2V8H10V2L0 12L10 22V16H14ZM8 14V17L3 12L8 7V10H16V7L21 12L16 17V14H8Z" />
    </Svg>
  );
};
