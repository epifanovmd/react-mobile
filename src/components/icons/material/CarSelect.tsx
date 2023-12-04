import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CarSelectIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 13L6.5 8.5H17.5L19 13H5ZM17.5 18C16.7 18 16 17.3 16 16.5C16 15.7 16.7 15 17.5 15C18.3 15 19 15.7 19 16.5C19 17.3 18.3 18 17.5 18ZM6.5 18C5.7 18 5 17.3 5 16.5C5 15.7 5.7 15 6.5 15C7.3 15 8 15.7 8 16.5C8 17.3 7.3 18 6.5 18ZM18.9 8C18.7 7.4 18.1 7 17.5 7H6.5C5.8 7 5.3 7.4 5.1 8L3 14V22C3 22.6 3.4 23 4 23H5C5.6 23 6 22.6 6 22V21H18V22C18 22.6 18.4 23 19 23H20C20.6 23 21 22.6 21 22V14L18.9 8ZM8 1L12 5.5L16 1H8Z" />
    </Svg>
  );
};
