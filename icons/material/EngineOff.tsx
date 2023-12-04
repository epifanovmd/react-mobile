import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EngineOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3.78 2.5L21.5 20.22L20.23 21.5L18 19.27V20H10L8 18H5V15H3V18H1V10H3V13H5V10L6.87 8.14L2.5 3.77L3.78 2.5ZM20 9V12H18V8H12V6H15V4H7.82L22.82 19H23V9H20Z" />
    </Svg>
  );
};
