import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SeedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.7 3.3C20.7 3.3 19.3 3 17.2 3C11.7 3 1.6 5.1 3.2 20.8C4.3 20.9 5.4 21 6.4 21C24.3 21 20.7 3.3 20.7 3.3ZM7 17C7 17 7 7 17 7C17 7 11 9 7 17Z" />
    </Svg>
  );
};
