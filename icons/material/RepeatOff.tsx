import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RepeatOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L15.73 19H7V22L3 18L7 14V17H13.73L7 10.27V11H5V8.27L2 5.27ZM17 13H19V17.18L17 15.18V13ZM17 5V2L21 6L17 10V7H8.82L6.82 5H17Z" />
    </Svg>
  );
};
