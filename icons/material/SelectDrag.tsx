import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SelectDragIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 17H17V13H19V17H23V19H19V23H17V19H13V17ZM11 17V19H9V17H11ZM7 17V19H5V17H7ZM19 9V11H17V9H19ZM19 5V7H17V5H19ZM15 5V7H13V5H15ZM11 5V7H9V5H11ZM7 5V7H5V5H7ZM7 13V15H5V13H7ZM7 9V11H5V9H7Z" />
    </Svg>
  );
};
