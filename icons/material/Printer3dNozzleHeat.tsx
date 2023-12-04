import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const Printer3dNozzleHeatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 2H14V7H16V13H13.5L10 17H8L4.5 13H2V7H4V2ZM23 14.5L21.6 16.7L23 18.9L21 22L19.2 21.1L20.7 18.9L19.2 16.7L21.2 13.6L23 14.5ZM18.7 14.5L17.2 16.7L18.7 18.9L16.7 22L14.9 21.1L16.3 18.9L14.9 16.7L16.9 13.6L18.7 14.5Z" />
    </Svg>
  );
};
