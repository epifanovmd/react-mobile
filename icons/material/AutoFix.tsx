import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AutoFixIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.50006 5.6L5.00006 7L6.40006 4.5L5.00006 2L7.50006 3.4L10.0001 2L8.60006 4.5L10.0001 7L7.50006 5.6ZM19.5001 15.4L22.0001 14L20.6001 16.5L22.0001 19L19.5001 17.6L17.0001 19L18.4001 16.5L17.0001 14L19.5001 15.4ZM22.0001 2L20.6001 4.5L22.0001 7L19.5001 5.6L17.0001 7L18.4001 4.5L17.0001 2L19.5001 3.4L22.0001 2ZM13.3401 12.78L15.7801 10.34L13.6601 8.22L11.2201 10.66L13.3401 12.78ZM14.3701 7.29L16.7101 9.63C17.1001 10 17.1001 10.65 16.7101 11.04L5.04006 22.71C4.65006 23.1 4.00006 23.1 3.63006 22.71L1.29006 20.37C0.900059 20 0.900059 19.35 1.29006 18.96L12.9601 7.29C13.3501 6.9 14.0001 6.9 14.3701 7.29Z" />
    </Svg>
  );
};
