import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BeakerQuestionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M0 3H18V5C16.9 5 16 5.9 16 7V19C16 20.1 15.1 21 14 21H4C2.9 21 2 20.1 2 19V7C2 5.9 1.1 5 0 5V3ZM4 9V10H7V9H4ZM4 11V12H7V11H4ZM7 16V15H4V16H7ZM9 14V13H4V14H9ZM9 8V7H4V8H9ZM21.5 15.5V17H20V15.5H21.5ZM19.5 10.5H18V10C18 8.34 19.34 7 21 7C22.66 7 24 8.34 24 10C24 10.97 23.5 11.88 22.71 12.41L22.41 12.6C21.84 13 21.5 13.62 21.5 14.3V14.5H20V14.3C20 13.11 20.6 12 21.59 11.35L21.88 11.16C22.27 10.9 22.5 10.47 22.5 10C22.5 9.18 21.83 8.5 21 8.5C20.17 8.5 19.5 9.17 19.5 10V10.5Z" />
    </Svg>
  );
};
