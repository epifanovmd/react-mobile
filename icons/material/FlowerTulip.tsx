import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlowerTulipIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 13C3 15.3869 3.94821 17.6761 5.63604 19.364C7.32387 21.0518 9.61305 22 12 22C12 19.6131 11.0518 17.3239 9.36396 15.636C7.67613 13.9482 5.38695 13 3 13ZM12 22C14.3869 22 16.6761 21.0518 18.364 19.364C20.0518 17.6761 21 15.3869 21 13C18.6131 13 16.3239 13.9482 14.636 15.636C12.9482 17.3239 12 19.6131 12 22ZM18 3V8C18 9.5913 17.3679 11.1174 16.2426 12.2426C15.1174 13.3679 13.5913 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8V3C6.74 3 7.47 3.12 8.16 3.39C8.71 3.62 9.2 3.96 9.61 4.39L12 2L14.39 4.39C14.8 3.96 15.29 3.62 15.84 3.39C16.53 3.12 17.26 3 18 3Z" />
    </Svg>
  );
};
