import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AxisArrowInfoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 2L16 6H13V13.85L19.53 17.61L21 15.03L22.5 20.5L17 21.96L18.53 19.35L12 15.58L5.47 19.35L7 21.96L1.5 20.5L3 15.03L4.47 17.61L11 13.85V6H8L12 2ZM21 5H19V3H21V5ZM22 10V12H18V10H19V8H18V6H21V10H22Z" />
    </Svg>
  );
};
