import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DragHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 15V13H5V15H3ZM3 11V9H5V11H3ZM7 15V13H9V15H7ZM7 11V9H9V11H7ZM11 15V13H13V15H11ZM11 11V9H13V11H11ZM15 15V13H17V15H15ZM15 11V9H17V11H15ZM19 15V13H21V15H19ZM19 11V9H21V11H19Z" />
    </Svg>
  );
};
