import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeCityOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 2V4.26L12 5.59V4H22V19H17V21H24V2H10ZM7.5 5L0 10V21H15V10L7.5 5ZM14 6V6.93L15.61 8H16V6H14ZM18 6V8H20V6H18ZM7.5 7.5L13 11V19H10V13H5V19H2V11L7.5 7.5ZM18 10V12H20V10H18ZM18 14V16H20V14H18Z" />
    </Svg>
  );
};
