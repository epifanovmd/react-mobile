import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlagOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 22.7305L14.1101 16.0005H13.0001L12.7201 14.6105L12.1101 14.0005H7.00011V21.0005H5.00011V6.89047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM20.0001 16.0005V6.00047H14.4001L14.0001 4.00047H7.20011L19.2001 16.0005H20.0001Z" />
    </Svg>
  );
};
