import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DragIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 19V17H9V19H7ZM11 19V17H13V19H11ZM15 19V17H17V19H15ZM7 15V13H9V15H7ZM11 15V13H13V15H11ZM15 15V13H17V15H15ZM7 11V9H9V11H7ZM11 11V9H13V11H11ZM15 11V9H17V11H15ZM7 7V5H9V7H7ZM11 7V5H13V7H11ZM15 7V5H17V7H15Z" />
    </Svg>
  );
};
