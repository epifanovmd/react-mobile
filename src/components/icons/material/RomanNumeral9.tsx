import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RomanNumeral9Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 7V9H10V15H11V17H7V15H8V9H7V7H11ZM12 7L14 12L12 17H14L15 14.5L16 17H18L16 12L18 7H16L15 9.5L14 7H12Z" />
    </Svg>
  );
};
