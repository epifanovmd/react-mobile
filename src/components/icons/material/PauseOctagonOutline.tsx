import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PauseOctagonOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 16H13V8H15V16ZM11 16H9V8H11V16ZM15.73 3L21 8.27V15.73L15.73 21H8.27L3 15.73V8.27L8.27 3H15.73ZM14.9 5H9.1L5 9.1V14.9L9.1 19H14.9L19 14.9V9.1L14.9 5Z" />
    </Svg>
  );
};
