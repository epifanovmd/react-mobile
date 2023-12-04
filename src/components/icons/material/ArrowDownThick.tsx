import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowDownThickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.99996 4H14V13L17.5 9.5L19.92 11.92L12 19.84L4.07996 11.92L6.49996 9.5L9.99996 13V4Z" />
    </Svg>
  );
};
