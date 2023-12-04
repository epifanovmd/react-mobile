import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BaseballBatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2C19.72 2 19.5 2.11 19.29 2.29L9.79 11.79C9.75 11.83 9.72 11.87 7.23 15.35L4 18.59L3.71 18.29C3.5 18.1 3.26 18 3 18C2.44 18 2 18.44 2 19C2 19.26 2.1 19.5 2.29 19.71L4.29 21.71C4.68 22.11 5.31 22.12 5.71 21.74C6.11 21.35 6.12 20.72 5.71 20.29L5.41 20L8.64 16.77L12.21 14.21L21.71 4.71C22.1 4.32 22.1 3.68 21.71 3.29L20.71 2.29C20.5 2.1 20.26 2 20 2ZM18.5 13C17.837 13 17.2011 13.2634 16.7322 13.7322C16.2634 14.2011 16 14.837 16 15.5C16 16.163 16.2634 16.7989 16.7322 17.2678C17.2011 17.7366 17.837 18 18.5 18C19.163 18 19.7989 17.7366 20.2678 17.2678C20.7366 16.7989 21 16.163 21 15.5C21 14.837 20.7366 14.2011 20.2678 13.7322C19.7989 13.2634 19.163 13 18.5 13Z" />
    </Svg>
  );
};
