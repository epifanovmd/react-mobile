import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatQuoteOpenOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 18V10H9.12L11.12 6H5.38L3 10.76V18H11ZM9 16H5V11.24L6.62 8H7.88L5.88 12H9V16ZM21 18V10H19.12L21.12 6H15.38L13 10.76V18H21ZM19 16H15V11.24L16.62 8H17.88L15.88 12H19V16Z" />
    </Svg>
  );
};
