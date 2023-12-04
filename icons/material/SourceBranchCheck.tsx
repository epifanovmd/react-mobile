import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SourceBranchCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 14C9.64 14 8.54 15.35 8.18 16.24C9.25 16.7 10 17.76 10 19C10 20.66 8.66 22 7 22C5.34 22 4 20.66 4 19C4 17.69 4.83 16.58 6 16.17V7.83C4.83 7.42 4 6.31 4 5C4 3.34 5.34 2 7 2C8.66 2 10 3.34 10 5C10 6.31 9.17 7.42 8 7.83V13.12C8.88 12.47 10.16 12 12 12C14.67 12 15.56 10.66 15.85 9.77C14.77 9.32 14 8.25 14 7C14 5.34 15.34 4 17 4C18.66 4 20 5.34 20 7C20 8.34 19.12 9.5 17.91 9.86C17.65 11.29 16.68 14 13 14ZM7 18C6.45 18 6 18.45 6 19C6 19.55 6.45 20 7 20C7.55 20 8 19.55 8 19C8 18.45 7.55 18 7 18ZM7 4C6.45 4 6 4.45 6 5C6 5.55 6.45 6 7 6C7.55 6 8 5.55 8 5C8 4.45 7.55 4 7 4ZM17 6C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6ZM16.75 21.16L14 18.16L15.16 17L16.75 18.59L20.34 15L21.5 16.41L16.75 21.16Z" />
    </Svg>
  );
};
