import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PrinterCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 7H6V3H18V7ZM6 21V17H2V11C2 9.34 3.34 8 5 8H19C20.66 8 22 9.34 22 11V13.81C21.12 13.3 20.1 13 19 13C17.77 13 16.64 13.37 15.69 14H8V19H13C13 19.7 13.13 20.37 13.35 21H6ZM18 11C18 11.55 18.45 12 19 12C19.55 12 20 11.55 20 11C20 10.45 19.55 10 19 10C18.45 10 18 10.45 18 11ZM23.5 17L22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z" />
    </Svg>
  );
};
