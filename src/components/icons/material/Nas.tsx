import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NasIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 5C2.89 5 2 5.89 2 7V17C2 18.11 2.89 19 4 19H20C21.11 19 22 18.11 22 17V7C22 5.89 21.11 5 20 5H4ZM4.5 7C4.76522 7 5.01957 7.10536 5.20711 7.29289C5.39464 7.48043 5.5 7.73478 5.5 8C5.5 8.26522 5.39464 8.51957 5.20711 8.70711C5.01957 8.89464 4.76522 9 4.5 9C4.23478 9 3.98043 8.89464 3.79289 8.70711C3.60536 8.51957 3.5 8.26522 3.5 8C3.5 7.73478 3.60536 7.48043 3.79289 7.29289C3.98043 7.10536 4.23478 7 4.5 7ZM7 7H20V17H7V7ZM8 8V16H11V8H8ZM12 8V16H15V8H12ZM16 8V16H19V8H16ZM9 9H10V10H9V9ZM13 9H14V10H13V9ZM17 9H18V10H17V9Z" />
    </Svg>
  );
};
