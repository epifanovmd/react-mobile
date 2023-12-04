import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FleurDeLisIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C12 2 9 4 9 7C9 10 11 12 11 16H10C10 16 10 14 9 12C7 8 3 10 3 13C3 16 5 16 5 16C5 13 8.5 13 8.5 16H7V18H10.5L9 20C9 20 10 21 11 20L12 22L13 20C14 21 15 20 15 20L13.5 18H17V16H15.5C15.5 13 19 13 19 16C19 16 21 16 21 13C21 10 17 8 15 12C14 14 14 16 14 16H13C13 12 15 10 15 7C15 4 12 2 12 2Z" />
    </Svg>
  );
};
