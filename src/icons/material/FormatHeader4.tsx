import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatHeader4Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 4H5V10H9V4H11V18H9V12H5V18H3V4ZM18 18V13H13V11L18 4H20V11H21V13H20V18H18ZM18 11V7.42L15.45 11H18Z" />
    </Svg>
  );
};
