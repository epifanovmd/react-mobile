import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SilverwareVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.09999 13.3403L3.90999 9.16031C2.34999 7.59031 2.34999 5.06031 3.90999 3.50031L10.93 10.5003L8.09999 13.3403ZM13.41 13.0003L20.29 19.8803L18.88 21.2903L12 14.4103L5.11999 21.2903L3.70999 19.8803L13.36 10.2203L13.16 10.0003C12.38 9.23031 12.38 7.97031 13.16 7.19031L17.5 2.82031L18.43 3.74031L15.19 7.00031L16.15 7.94031L19.39 4.69031L20.31 5.61031L17.06 8.85031L18 9.81031L21.26 6.56031L22.18 7.50031L17.81 11.8403C17.03 12.6203 15.77 12.6203 15 11.8403L14.78 11.6403L13.41 13.0003Z" />
    </Svg>
  );
};