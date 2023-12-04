import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SquareOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.84 22.7305L19.11 21.0005H2.99999V4.89047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM21 3.00047H6.19999L21 17.8005V3.00047Z" />
    </Svg>
  );
};
