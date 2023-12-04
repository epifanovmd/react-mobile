import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DeleteSweepOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 16H19V18H15V16ZM15 8H22V10H15V8ZM15 12H21V14H15V12ZM11 10V18H5V10H11ZM13 8H3V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H11C11.5304 20 12.0391 19.7893 12.4142 19.4142C12.7893 19.0391 13 18.5304 13 18V8ZM14 5H11L10 4H6L5 5H2V7H14V5Z" />
    </Svg>
  );
};
