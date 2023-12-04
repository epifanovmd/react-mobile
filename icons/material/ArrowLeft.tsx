import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 11.0001V13.0001H8.00003L13.5 18.5001L12.08 19.9201L4.16003 12.0001L12.08 4.08008L13.5 5.50008L8.00003 11.0001H20Z" />
    </Svg>
  );
};
