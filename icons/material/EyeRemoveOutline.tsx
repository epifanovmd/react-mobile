import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EyeRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM12 17.5C8.24 17.5 4.83 15.36 3.18 12C4.83 8.64 8.24 6.5 12 6.5C15.76 6.5 19.17 8.64 20.82 12C20.63 12.39 20.41 12.77 20.17 13.13C20.85 13.26 21.5 13.5 22.07 13.85C22.43 13.27 22.74 12.65 23 12C21.27 7.61 17 4.5 12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.35 19.5 12.69 19.5 13.03 19.45C13 19.3 13 19.15 13 19C13 18.45 13.08 17.92 13.22 17.41C12.82 17.46 12.41 17.5 12 17.5Z" />
    </Svg>
  );
};
