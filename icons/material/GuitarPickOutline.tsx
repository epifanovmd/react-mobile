import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GuitarPickOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 4.1C18.1 3.3 17 2.8 15.8 2.5C15.5 2.4 13.6 2 12.2 2C12.2 2 12.1 2 12 2C12 2 11.9 2 11.8 2C10.4 2 8.39999 2.4 8.09999 2.5C6.99999 2.8 5.89999 3.3 4.99999 4.1C2.99999 5.9 2.99999 8.7 3.99999 11C4.99999 13.5 6.09999 15.7 7.59999 17.9C8.79999 19.6 10.1 22 12 22C13.9 22 15.2 19.6 16.5 17.9C18 15.8 19.1 13.5 20.1 11C21 8.7 21 5.9 19 4.1ZM18.2 10.2C17.1 12.9 16.1 14.9 14.8 16.7C14.6 16.9 14.5 17.2 14.3 17.4C13.8 18.2 12.6 20 12 20C11.3 20 10.2 18.3 9.59999 17.4C9.39999 17.2 9.29999 16.9 9.09999 16.7C7.89999 14.9 6.79999 12.9 5.69999 10.2C5.49999 9.5 4.69999 7 6.29999 5.5C6.79999 5 7.59999 4.7 8.59999 4.4C8.99999 4.4 10.7 4 11.8 4H12.1C13.2 4 14.9 4.3 15.3 4.4C16.3 4.7 17.1 5 17.6 5.5C19.3 7 18.5 9.5 18.2 10.2Z" />
    </Svg>
  );
};
