import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AxisZArrowIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 2L16.0001 6H13.0001V13.82L22.3901 19.25L21.3901 21L12.0001 15.56L2.61011 21L1.61011 19.25L11.0001 13.82V6H8.00011L12.0001 2Z" />
    </Svg>
  );
};
