import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ReplyAllIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 9V5L6 12L13 19V14.9C18 14.9 21.5 16.5 24 20C23 15 20 10 13 9ZM7 8V5L0 12L7 19V16L3 12L7 8Z" />
    </Svg>
  );
};
