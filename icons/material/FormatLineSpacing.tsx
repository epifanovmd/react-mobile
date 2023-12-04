import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatLineSpacingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 13H22V11H10V13ZM10 19H22V17H10V19ZM10 7H22V5H10V7ZM6 7H8.5L5 3.5L1.5 7H4V17H1.5L5 20.5L8.5 17H6V7Z" />
    </Svg>
  );
};
