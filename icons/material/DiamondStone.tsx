import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DiamondStoneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 9H19L14 16L16 9ZM10 9H14L12 17L10 9ZM5 9H8L10 16L5 9ZM15 4H17L19 7H16L15 4ZM11 4H13L14 7H10L11 4ZM7 4H9L8 7H5L7 4ZM6 2L2 8L12 22L22 8L18 2H6Z" />
    </Svg>
  );
};
