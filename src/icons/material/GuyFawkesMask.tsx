import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GuyFawkesMaskIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 13C21 15.3869 20.0518 17.6761 18.364 19.364C16.6761 21.0518 14.3869 22 12 22C9.61305 22 7.32387 21.0518 5.63604 19.364C3.94821 17.6761 3 15.3869 3 13L3.03 4.43C5.68 2.88 8.76 2 12.05 2C15.3 2 18.36 2.87 21 4.38V13ZM13 19.93C16.39 19.44 19 16.5 19 13V5.59C16.9 4.57 14.54 4 12.05 4C9.5 4 7.08 4.6 4.94 5.66L5 13C5 16.5 7.63 19.44 11 19.93V18H13V19.93ZM11 16H8L6 13L9 14H10L11 13H13L14 14H15L18 13L16 16H13L12 15L11 16ZM6 9.03C6.64 8.4 7.5 8.05 8.5 8.05C9.45 8.05 10.34 8.4 11 9.03C10.34 9.65 9.45 10 8.5 10C7.5 10 6.64 9.65 6 9.03ZM13 9.03C13.64 8.4 14.5 8.05 15.5 8.05C16.45 8.05 17.34 8.4 18 9.03C17.34 9.65 16.45 10 15.5 10C14.5 10 13.64 9.65 13 9.03Z" />
    </Svg>
  );
};
