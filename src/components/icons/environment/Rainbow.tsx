import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RainbowIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M3 17V15C3 10.0294 7.02944 6 12 6C16.9706 6 21 10.0294 21 15V17M6 17V15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15V17M9 17V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V17"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
