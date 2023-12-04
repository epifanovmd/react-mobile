import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const WaterOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.84 22.7305L16.29 18.1805C15.2 19.3005 13.69 20.0005 12 20.0005C8.68999 20.0005 5.99999 17.3105 5.99999 14.0005C5.99999 12.6705 6.66999 11.0305 7.54999 9.44047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM18 14.0005C18 10.0005 12 3.25047 12 3.25047C12 3.25047 10.84 4.55047 9.54999 6.35047L17.95 14.7505C18 14.5005 18 14.2505 18 14.0005Z" />
    </Svg>
  );
};
