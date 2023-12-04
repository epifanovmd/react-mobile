import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MagnifyPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.57 15.5 12 14.61 13.19L15.41 14H16L22 20L20 22L14 16V15.41L13.19 14.61C12 15.5 10.57 16 9 16C7.14348 16 5.36301 15.2625 4.05025 13.9497C2.7375 12.637 2 10.8565 2 9C2 7.14348 2.7375 5.36301 4.05025 4.05025C5.36301 2.7375 7.14348 2 9 2ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" />
    </Svg>
  );
};
