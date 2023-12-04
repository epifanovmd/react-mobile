import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LadderIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 1V3H10V1H8V22H10V20H14V22H16V1H14ZM14 5V8H10V5H14ZM14 10V13H10V10H14ZM10 18V15H14V18H10Z" />
    </Svg>
  );
};
