import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MagnifyCloseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.5 15.5 12 14.61 13.19L15.41 14H16L22 20L20 22L14 16V15.41L13.19 14.61C12 15.5 10.5 16 9 16C7.14348 16 5.36301 15.2625 4.05025 13.9497C2.7375 12.637 2 10.8565 2 9C2 7.14348 2.7375 5.36301 4.05025 4.05025C5.36301 2.7375 7.14348 2 9 2ZM11.12 5.46L9 7.59L6.88 5.46L5.46 6.88L7.59 9L5.46 11.12L6.88 12.54L9 10.41L11.12 12.54L12.54 11.12L10.41 9L12.54 6.88L11.12 5.46Z" />
    </Svg>
  );
};