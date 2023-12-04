import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FocusFieldVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3ZM5 5H9V3H5C3.9 3 3 3.9 3 5V9H5V5ZM5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM11 11H13V13H11V11ZM11 7H13V9H11V7ZM11 15H13V17H11V15Z" />
    </Svg>
  );
};
