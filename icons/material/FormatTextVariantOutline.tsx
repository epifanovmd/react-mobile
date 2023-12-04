import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatTextVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 3C10.18 3 9.43996 3.5 9.13996 4.27L3.63996 18.27C3.11996 19.58 4.08996 21 5.49996 21H7.74996C8.58996 21 9.32996 20.5 9.61996 19.7L10.26 18H13.74L14.38 19.7C14.67 20.5 15.42 21 16.25 21H18.5C19.91 21 20.88 19.58 20.36 18.27L14.86 4.27C14.56 3.5 13.82 3 13 3H11ZM11 5H13L18.5 19H16.25L15.12 16H8.86996L7.74996 19H5.49996L11 5ZM12 7.67L9.61996 14H14.37L12 7.67Z" />
    </Svg>
  );
};
