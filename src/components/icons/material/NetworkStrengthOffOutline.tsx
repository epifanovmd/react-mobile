import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NetworkStrengthOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 1L12.4 9.6L13.85 11.05L19 5.83V16.19L21 18.19V1ZM4.77 4.5L3.5 5.77L9.86 12.13L1 21H18.73L20.73 23L22 21.73L4.77 4.5ZM11.33 13.6L16.73 19H6" />
    </Svg>
  );
};
