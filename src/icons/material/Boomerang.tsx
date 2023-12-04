import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoomerangIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 2H4C2.9 2 2 2.9 2 4C2 5.1 2.9 6 4 6H8L10 2ZM18 2C20.2 2 22 3.8 22 6V12L18 14C18 9.6 14.4 6 10 6L12 2H18ZM18 20V16L22 14V20C22 21.1 21.1 22 20 22C18.9 22 18 21.1 18 20Z" />
    </Svg>
  );
};
