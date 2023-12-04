import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RomanNumeral6Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 7L8 17H10L12 7H10L9 12L8 7H6ZM17 7V9H16V15H17V17H13V15H14V9H13V7H17Z" />
    </Svg>
  );
};
