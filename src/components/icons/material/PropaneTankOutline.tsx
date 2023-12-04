import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PropaneTankOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 6V4C16 2.9 15.11 2 14 2H10C8.9 2 8 2.9 8 4V6C5.79 6 4 7.79 4 10V17C4 18.86 5.28 20.41 7 20.86V22H17V20.86C18.72 20.42 20 18.86 20 17V10C20 7.79 18.21 6 16 6ZM10 4H14V6H10V4ZM18 17C18 18.1 17.1 19 16 19H8C6.9 19 6 18.1 6 17V10C6 8.9 6.9 8 8 8H16C17.1 8 18 8.9 18 10V17Z" />
    </Svg>
  );
};
