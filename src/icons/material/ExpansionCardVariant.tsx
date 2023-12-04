import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ExpansionCardVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 7H4.5V17H3V8.5H2V7ZM22 7V16H14V17H7V16H6V7H22ZM10 9H8V12H10V9ZM13 9H11V12H13V9ZM20 9H15V14H20V9Z" />
    </Svg>
  );
};
