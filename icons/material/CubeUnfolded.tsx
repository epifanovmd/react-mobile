import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CubeUnfoldedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 9V4H13V9H23V16H18V21H11V16H1V9H6ZM16 16H13V19H16V16ZM8 9H11V6H8V9ZM6 14V11H3V14H6ZM18 11V14H21V11H18ZM13 11V14H16V11H13ZM8 11V14H11V11H8Z" />
    </Svg>
  );
};
