import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RomanNumeral2Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 7V9H10V15H11V17H7V15H8V9H7V7H11ZM17 7V9H16V15H17V17H13V15H14V9H13V7H17Z" />
    </Svg>
  );
};
