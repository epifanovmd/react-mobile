import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PentagonOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5L19.6 10.5L16.7 19.4H7.3L4.4 10.5L12 5ZM12 2.5L2 9.8L5.8 21.5H18.1L22 9.8L12 2.5Z" />
    </Svg>
  );
};
