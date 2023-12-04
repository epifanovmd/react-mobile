import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TooltipRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2ZM20 16H15.17L12 19.17L8.83 16H4V4H20V16ZM8.46 12.12L10.59 10L8.46 7.88L9.88 6.47L12 8.59L14.12 6.47L15.54 7.88L13.41 10L15.54 12.12L14.12 13.54L12 11.41L9.88 13.54L8.46 12.12Z" />
    </Svg>
  );
};
