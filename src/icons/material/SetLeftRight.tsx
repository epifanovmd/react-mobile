import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetLeftRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 5C10.04 5 11.06 5.24 12 5.68C12.94 5.24 13.96 5 15 5C16.8565 5 18.637 5.7375 19.9497 7.05025C21.2625 8.36301 22 10.1435 22 12C22 13.8565 21.2625 15.637 19.9497 16.9497C18.637 18.2625 16.8565 19 15 19C13.96 19 12.94 18.76 12 18.32C11.06 18.76 10.04 19 9 19C7.14348 19 5.36301 18.2625 4.05025 16.9497C2.7375 15.637 2 13.8565 2 12C2 10.1435 2.7375 8.36301 4.05025 7.05025C5.36301 5.7375 7.14348 5 9 5ZM9 12C9 14.22 10.21 16.16 12 17.2C13.79 16.16 15 14.22 15 12C15 9.78 13.79 7.84 12 6.8C10.21 7.84 9 9.78 9 12Z" />
    </Svg>
  );
};
