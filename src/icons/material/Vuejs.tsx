import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VuejsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 3H5.5L12 15L18.5 3H22L12 21L2 3ZM6.5 3H9.5L12 7.58L14.5 3H17.5L12 13.08L6.5 3Z" />
    </Svg>
  );
};
