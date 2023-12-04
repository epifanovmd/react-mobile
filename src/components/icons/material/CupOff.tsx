import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CupOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 4.27L2.28 3L21 21.72L19.73 23L18.27 21.54C17.93 21.83 17.5 22 17 22H7C5.97 22 5.13 21.23 5 20.23L3.53 6.8L1 4.27ZM18.32 8L18.77 4H5.82L3.82 2H21L19.29 17.47L9.82 8H18.32Z" />
    </Svg>
  );
};
