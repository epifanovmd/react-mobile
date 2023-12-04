import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DogSideIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 3L15 7L18 10L19 9L20 10L22 8L19 5V3ZM3 7L2 8L5 11V14L4 15V21H6V18L8 15H15V21H17V11L14 8L13 9H5L3 7Z" />
    </Svg>
  );
};
