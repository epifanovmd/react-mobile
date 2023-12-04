import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlashOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 10H13L17 2H7V4.18L15.46 12.64L17 10ZM3.27 3L2 4.27L7 9.27V13H10V22L13.58 15.86L17.73 20L19 18.73L3.27 3Z" />
    </Svg>
  );
};
