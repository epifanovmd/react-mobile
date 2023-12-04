import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BagCarryOnIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.6 21.4C15 21.8 15.4 22 16 22C16.6 22 17 21.8 17.4 21.4C17.8 21 18 20.6 18 20C18 19.4 17.8 19 17.4 18.6C17 18.2 16.5 18 16 18C15.5 18 15 18.2 14.6 18.6C14.2 19 14 19.4 14 20C14 20.6 14.2 21 14.6 21.4ZM6 19C6 19.5 6.2 20 6.6 20.4C7 20.8 7.5 21 8 21V7C7.5 7 7 7.2 6.6 7.6C6.2 8 6 8.5 6 9V19ZM16 2H12C12 2.5 12.2 3 12.6 3.4C13 3.8 13.5 4 14 4V7H9V21H13.2C13 20.5 13 20.2 13 20C13 19.2 13.3 18.5 13.9 17.9C14.5 17.3 15.2 17 16 17V2Z" />
    </Svg>
  );
};
