import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PowerSocketJpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 9.5V14.5H8V9.5H10ZM19.78 2C21 2 22 3 22 4.22V19.78C22 21 21 22 19.78 22H4.22C3 22 2 21 2 19.78V4.22C2 3 3 2 4.22 2H19.78ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM16 9.5V14.5H14V9.5H16Z" />
    </Svg>
  );
};
