import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const OctagonOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.27 3L3 8.27V15.73L8.27 21H15.73C17.5 19.24 21 15.73 21 15.73V8.27L15.73 3H8.27ZM9.1 5H14.9L19 9.1V14.9L14.9 19H9.1L5 14.9V9.1" />
    </Svg>
  );
};
