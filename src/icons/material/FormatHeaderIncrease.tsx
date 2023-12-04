import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatHeaderIncreaseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 4H6V10H10V4H12V18H10V12H6V18H4V4ZM14.59 7.41L18.17 11L14.59 14.59L16 16L21 11L16 6L14.59 7.41Z" />
    </Svg>
  );
};
