import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SizeXxsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 7H11L12 9.5L13 7H15L13 12L15 17H13L12 14.5L11 17H9L11 12L9 7ZM18 7H22V9H18V11H20C21.11 11 22 11.9 22 13V15C22 16.11 21.11 17 20 17H16V15H20V13H18C16.9 13 16 12.11 16 11V9C16 7.9 16.9 7 18 7ZM2 7H4L5 9.5L6 7H8L6 12L8 17H6L5 14.5L4 17H2L4 12L2 7Z" />
    </Svg>
  );
};
