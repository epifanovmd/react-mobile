import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MagazinePistolIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 1L12 3H7L9 21H8V23H18V21L16 1H14ZM9 5H12L12.24 7H9.24L9 5ZM9.47 9H12.47L12.71 11H9.71L9.47 9ZM9.94 13H12.94L13.18 15H10.18L9.94 13ZM10.41 17H13.41L13.65 19H10.65L10.41 17Z" />
    </Svg>
  );
};
