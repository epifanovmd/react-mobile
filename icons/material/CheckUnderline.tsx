import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CheckUnderlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 4.99984L9 16.9998L3.5 11.4998L4.91 10.0898L9 14.1698L19.59 3.58984L21 4.99984ZM3 20.9998V18.9998H21V20.9998H3Z" />
    </Svg>
  );
};
