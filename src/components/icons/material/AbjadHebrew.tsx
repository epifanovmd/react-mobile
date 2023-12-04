import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AbjadHebrewIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3.90002 4L9.00002 10.03C7.58002 10.17 6.36002 11.18 6.00002 12.59L4.00002 20H6.07002L7.92002 13.11C8.09002 12.46 8.69002 12 9.36002 12H10.69L17.47 20H20.1L15 13.97C16.42 13.83 17.64 12.82 18 11.41L20 4H17.93L16.08 10.89C15.91 11.54 15.31 12 14.64 12H13.31L6.53002 4H3.90002Z" />
    </Svg>
  );
};
