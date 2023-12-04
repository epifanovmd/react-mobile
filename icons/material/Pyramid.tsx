import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PyramidIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.8499 16.96L12.8499 2.47C12.6499 2.16 12.3299 2 11.9999 2C11.6699 2 11.3499 2.16 11.1499 2.47L2.14994 16.96C1.83994 17.45 1.99994 18.18 2.63994 18.43L11.6399 21.93C11.7499 22 11.8799 22 11.9999 22C12.1199 22 12.2499 22 12.3599 21.93L21.3599 18.43C21.9999 18.18 22.1599 17.45 21.8499 16.96ZM10.9999 6.5V13.32L5.41994 15.5L10.9999 6.5ZM11.9999 19.93L5.75994 17.5L11.9999 15.07L18.2399 17.5L11.9999 19.93ZM12.9999 13.32V6.5L18.5799 15.5L12.9999 13.32Z" />
    </Svg>
  );
};
