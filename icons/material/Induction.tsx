import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const InductionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 2C20.75 2 18.75 2.61 17.19 3.33C15.79 2.61 14 2 12 2C10 2 8.21 2.61 6.81 3.33C5.25 2.61 3.25 2 1 2V4C2.36 4 3.61 4.27 4.71 4.64C4.03 5.15 3.63 5.54 3.59 5.59C3.21 5.96 3 6.47 3 7V18C3 20.21 4.79 22 7 22C9.21 22 11 20.21 11 18V7C11 6.42 10.75 5.88 10.32 5.5C10.26 5.45 9.8 5.05 9 4.54C9.92 4.22 10.92 4 12 4C13.08 4 14.08 4.22 15 4.54C14.2 5.05 13.74 5.45 13.68 5.5C13.25 5.88 13 6.42 13 7V18C13 20.21 14.79 22 17 22C19.21 22 21 20.21 21 18V7C21 6.47 20.79 5.96 20.41 5.59C20.37 5.54 19.97 5.15 19.29 4.64C20.39 4.27 21.64 4 23 4V2ZM9 7V18C9 19.11 8.11 20 7 20C5.89 20 5 19.11 5 18V7C5 7 5.7 6.31 6.87 5.58C8.2 6.31 9 7 9 7ZM19 7V18C19 19.11 18.11 20 17 20C15.89 20 15 19.11 15 18V7C15 7 15.8 6.31 17.13 5.58C18.3 6.31 19 7 19 7Z" />
    </Svg>
  );
};