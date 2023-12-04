import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChevronTripleRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.5801 16.59L19.1701 12L14.5801 7.41L16.0001 6L22.0001 12L16.0001 18L14.5801 16.59ZM8.58008 16.59L13.1701 12L8.58008 7.41L10.0001 6L16.0001 12L10.0001 18L8.58008 16.59ZM2.58008 16.59L7.17008 12L2.58008 7.41L4.00008 6L10.0001 12L4.00008 18L2.58008 16.59Z" />
    </Svg>
  );
};
