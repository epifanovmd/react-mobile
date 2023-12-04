import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TildeOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.84 22.7305L10.78 12.6705C9.99999 12.0305 9.26999 11.5005 8.49999 11.5005C4.49999 11.5005 4.49999 15.0005 4.49999 15.0005H1.99999C1.99999 15.0005 1.99999 9.59047 7.15999 9.05047L1.10999 3.00047L2.38999 1.73047L10.03 9.37047L15.64 15.0005H15.63L22.11 21.4605L20.84 22.7305ZM22 9.00047H19.5C19.5 9.00047 19.5 12.3805 15.69 12.5005L17.95 14.7505C22 13.6205 22 9.00047 22 9.00047Z" />
    </Svg>
  );
};
