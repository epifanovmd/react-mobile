import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatHeaderDecreaseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 4H6V10H10V4H12V18H10V12H6V18H4V4ZM20.42 7.41L16.83 11L20.42 14.59L19 16L14 11L19 6L20.42 7.41Z" />
    </Svg>
  );
};
