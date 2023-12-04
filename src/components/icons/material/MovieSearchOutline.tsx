import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MovieSearchOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V13C21.5 12.2 20.8 11.5 20 11V10H5.8L4 6.5V18H10.2C10.4 18.7 10.6 19.4 11 20ZM20.3 18.9C20.7 18.2 21 17.4 21 16.5C21 14 19 12 16.5 12C14 12 12 14 12 16.5C12 19 14 21 16.5 21C17.4 21 18.2 20.8 18.9 20.3L22 23.4L23.4 22L20.3 18.9ZM16.5 19C15.1 19 14 17.9 14 16.5C14 15.1 15.1 14 16.5 14C17.9 14 19 15.1 19 16.5C19 17.9 17.9 19 16.5 19Z" />
    </Svg>
  );
};
