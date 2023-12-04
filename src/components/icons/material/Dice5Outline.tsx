import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Dice5OutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7.5 6C6.7 6 6 6.7 6 7.5C6 8.3 6.7 9 7.5 9C8.3 9 9 8.3 9 7.5C9 6.7 8.3 6 7.5 6ZM16.5 15C15.7 15 15 15.7 15 16.5C15 17.3 15.7 18 16.5 18C17.3 18 18 17.3 18 16.5C18 15.7 17.3 15 16.5 15ZM16.5 6C15.7 6 15 6.7 15 7.5C15 8.3 15.7 9 16.5 9C17.3 9 18 8.3 18 7.5C18 6.7 17.3 6 16.5 6ZM12 10.5C11.2 10.5 10.5 11.2 10.5 12C10.5 12.8 11.2 13.5 12 13.5C12.8 13.5 13.5 12.8 13.5 12C13.5 11.2 12.8 10.5 12 10.5ZM7.5 15C6.7 15 6 15.7 6 16.5C6 17.3 6.7 18 7.5 18C8.3 18 9 17.3 9 16.5C9 15.7 8.3 15 7.5 15Z" />
    </Svg>
  );
};
