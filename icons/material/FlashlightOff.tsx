import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlashlightOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L15 18.27V22H9V12.27L2 5.27ZM18 5L15 10H11.82L6.82 5H18ZM18 4H6V2H18V4ZM15 11V13.18L12.82 11H15Z" />
    </Svg>
  );
};
