import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PauseOctagonIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.73 3L21 8.27V15.73L15.73 21H8.27L3 15.73V8.27L8.27 3H15.73ZM15 16V8H13V16H15ZM11 16V8H9V16H11Z" />
    </Svg>
  );
};
