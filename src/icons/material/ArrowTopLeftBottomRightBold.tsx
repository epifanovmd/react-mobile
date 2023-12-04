import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowTopLeftBottomRightBoldIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.83 8.66L3 11.5V3H11.5L8.66 5.83L18.17 15.34L21 12.5V21H12.5L15.34 18.17L5.83 8.66Z" />
    </Svg>
  );
};
