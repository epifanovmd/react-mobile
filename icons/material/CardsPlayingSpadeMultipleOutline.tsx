import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CardsPlayingSpadeMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 0H9C7.9 0 7 0.9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 0.9 20.1 0 19 0ZM19 18H9V2H19V18ZM3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3ZM14 5.7L13.4 6.2C11.4 8.1 10 9.3 10 10.8C10 12 11 13 12.2 13C12.6 13 13 12.9 13.4 12.7L12.5 15H15.5L14.6 12.7C14.9 12.9 15.4 13 15.8 13C17 13 18 12.1 18 10.8C18 9.3 16.6 8.1 14.6 6.2L14 5.7Z" />
    </Svg>
  );
};
