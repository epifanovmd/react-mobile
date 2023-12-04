import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardCapsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 18.0001H18V16.0001H6V18.0001ZM12 8.41008L16.59 13.0001L18 11.5801L12 5.58008L6 11.5801L7.41 13.0001L12 8.41008Z" />
    </Svg>
  );
};
