import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AxisYArrowIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.5001 20.5L17.0001 21.96L18.5301 19.35L12.0001 15.58L2.61011 21L1.61011 19.27L11.0001 13.85V3H13.0001V13.85L19.5301 17.61L21.0001 15.03L22.5001 20.5Z" />
    </Svg>
  );
};
