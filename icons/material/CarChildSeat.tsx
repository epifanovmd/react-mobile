import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CarChildSeatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 4.5C17 5.9 15.9 7 14.5 7C13.1 7 12 5.9 12 4.5C12 3.1 13.1 2 14.5 2C15.9 2 17 3.1 17 4.5ZM15 8H14.2C12.1 8 10.1 6.8 9.1 4.9C9 4.8 8.9 4.7 8.9 4.6L7.1 5.4C7.6 6.8 9.2 8.6 11.5 9.5L9.7 14.5L5.8 13.4L3 18.9L5 19.4L6.8 15.8L11.3 17C12.3 17.2 13.3 16.7 13.7 15.8L16 9.4C16.2 8.7 15.7 8 15 8ZM18.9 7L15.5 16.4C14.9 18 13.4 19 11.8 19C11.5 19 11.1 19 10.8 18.9L7.9 18.1L7 19.9L9 20.4L10.4 20.8C10.9 20.9 11.4 21 11.9 21C14.4 21 16.6 19.5 17.5 17.1L21 7H18.9Z" />
    </Svg>
  );
};