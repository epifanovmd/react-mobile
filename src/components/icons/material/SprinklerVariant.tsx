import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SprinklerVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 10H14V22H10V10ZM7 9H9V7H7V9ZM4 8H6V6H4V8ZM4 11H6V9H4V11ZM1 13H3V11H1V13ZM1 7H3V5H1V7ZM1 10H3V8H1V10ZM18 11H20V9H18V11ZM21 10H23V8H21V10ZM21 5V7H23V5H21ZM21 13H23V11H21V13ZM15 9H17V7H15V9ZM18 8H20V6H18V8ZM10 7H10.33L11 9H13L13.67 7H14V6H10V7Z" />
    </Svg>
  );
};
