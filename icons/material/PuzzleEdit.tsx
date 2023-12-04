import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PuzzleEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.04 12.13C20.9 12.13 20.76 12.19 20.65 12.3L19.65 13.3L21.7 15.35L22.7 14.35C22.92 14.14 22.92 13.79 22.7 13.58L21.42 12.3C21.31 12.19 21.18 12.13 21.04 12.13ZM19.07 13.88L13 19.94V22H15.06L21.12 15.93L19.07 13.88ZM19 11.12L11.91 18.2C11.5 17.95 11 17.8 10.5 17.8C9 17.8 7.8 19 7.8 20.5V22H4C2.9 22 2 21.11 2 20V16.2H3.5C5 16.2 6.2 15 6.2 13.5C6.2 12 5 10.8 3.5 10.8H2V7C2 5.9 2.9 5 4 5H8V3.5C8 2.12 9.12 1 10.5 1C11.88 1 13 2.12 13 3.5V5H17C18.1 5 19 5.89 19 7V11.12Z" />
    </Svg>
  );
};
