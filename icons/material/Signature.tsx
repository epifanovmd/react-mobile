import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SignatureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 21.9998H2V19.9998H22V21.9998ZM2.26 16.8298L5.09 13.9998L2.26 11.1698L3.67 9.75977L6.5 12.5898L9.33 9.75977L10.74 11.1698L7.91 13.9998L10.74 16.8298L9.33 18.2398L6.5 15.4098L3.67 18.2398L2.26 16.8298Z" />
    </Svg>
  );
};
