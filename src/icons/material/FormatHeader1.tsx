import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatHeader1Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 4H5V10H9V4H11V18H9V12H5V18H3V4ZM14 18V16H16V6.31L13.5 7.75V5.44L16 4H18V16H20V18H14Z" />
    </Svg>
  );
};
